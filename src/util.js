import * as processor from './processor';
import * as calculator from './calculator';
import {replace} from 'estraverse';
import {config} from './config';

export function setNodeUsed(node) {
    if (!node) {
        return;
    }
    node.opt = node.opt || {};
    node.opt.used = true;
}

export function isNodeUsed(node) {
    if (node.opt) {
        return !!node.opt.used;
    }
    return false;
}

export function setTypeUsed(node) {
    let func = processor[node.type];
    if (func) {
        // log(node.type);
        func(node);
    }
    else {
        console.log(node.type + ' not support');
        console.trace();
        // setNodeUsed(node);
    }
}

export function setUsed(node) {
    if (!node) {
        return;
    }
    if (node.opt.processed) {
        return;
    }
    // log(node.type, node.value || node.name);
    node.opt.processed = true;
    setTypeUsed(node);
    if (
        // 所有的Identifier 要找到定义的地方并标记
        node.type === 'Identifier'
        // 如果当前Identifier 就是定义中的Identifier，则不再向上找
        // 避免外层定义了同名变量被误标记
        && node.parent.type !== 'VariableDeclarator'
    ) {
        // 如果是Identifier就要计算是不是闭包里的，要找到引用到的定义，设置为使用过
        let variable = getClosureVariable(node);
        if (variable) {
            let defs = variable.defs;
            let def = defs[defs.length - 1];
            if (def.node !== node) {
                // log(def.node);
                setUsed(def.node);
            }
        }
    }
}

export function isGlobalVariable(ident) {
    return !getClosureVariable(ident);
}

export function getClosureVariable(ident) {
    let scope = ident.scope;
    while (scope) {
        let target = scope.variables.find(item => item.name === ident.name);
        if (target && !target.identifiers.find(item => item === ident)) {
            return target;
        }
        scope = scope.upper;
    }
    return;
}

// 先设置变量定义、function定义为删除的，如果被其他node引用，则在后续操作里改为不删除
let excludeNodes = [
    'VariableDeclaration', 'VariableDeclarator', 'FunctionDeclaration' 
];


/**
 * 判断是不是需要被忽略的全局变量调用
 * 比如define 和eslxDefine，有可能定义了，但是没有被调用，应该被shake
 * 所以，这两个名字的调用在最开始是不会被标记调用的
 *
 * @param {Node} node
 *
 * @return {boolean}
 */
export function isIgnoredGlobalCall(node) {
    if (
        node.type === 'CallExpression'
        && isGlobalVariable(node.callee)
    ) {
        return !!config.ignoreGlobalVariableCall.find(item => item === node.callee.name);
    }
    return false;
}

export function isDefineCall(node) {
    if (
        node.type === 'CallExpression'
        && ['define', 'eslxDefine'].find(item => item === node.callee.name)
    ) {
        return true;
    }
    return false;
}

export function isRequireCall(node) {
    if (
        node.type === 'CallExpression'
        && node.callee.name === 'require'
    ) {
        return true;
    }
    return false;
}

export function traverseNode(node) {
    if (!node) {
        return;
    }
    if (!excludeNodes.find(type => node.type === type)) {
        setUsed(node);
    }
}

export function evaluateNode(node) {
    if (!node) {
        return;
    }
    let func = calculator[node.type];
    if (func) {
        let ret = func(node);
        if (ret) {
            return ret;
        }
        return node;
    }
    return node;
}

