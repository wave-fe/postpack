import * as processor from './processor';
import * as calculator from './calculator';
import {replace} from 'estraverse';
import {config} from './config';

import {global} from './globalManager';
import {ref} from './ref';

import uuid from 'uuid/v4';

export function isUsed(node) {
    return node && node.opt && node.opt.used;
}

export function setNodeUsed(node) {
    if (!node) {
        return;
    }
    node.opt = node.opt || {};
    node.opt.used = true;
}

export function setNodeUnUsed(node) {
    if (!node) {
        return;
    }
    node.opt = node.opt || {};
    node.opt.used = false;
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
        func(node);
    }
    else {
        log(node.type + ' not support');
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
            if (def && def.node !== node) {
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
    'VariableDeclaration', 'VariableDeclarator', 'FunctionDeclaration' , 'FunctionExpression'
];

function isExcludeNode(node) {
    // 先搜索排除列表
    return excludeNodes.find(type => node.type === type)
    // 再看是否是define，define在第一次的时候排除，等到require的时候再处理
    || (
        // 当前node是CallExpression
        node.type === 'CallExpression'
        // 并且callee是define
        && isDefine(getUUID(node.callee))
    ) ;
}

export function traverseNode(node, force) {
    if (!node) {
        return;
    }
    if (force === true || !isExcludeNode(node)) {
        setUsed(node);
    }
}

export function evaluateNode(node, deep = false) {
    if (!node) {
        return;
    }
    let funcDeep = deep === true ? calculator[node.type + 'Deep'] : undefined;
    let func = funcDeep || calculator[node.type];
    if (func) {
        // indexLog('>>>', node.type, deep, node.name || node.value, node.uuid);
        let ret = func(node);
        // indexLog('<<<', node.type, deep, node.name || node.value, node.uuid);
        // setTimeout(function () {
        //     // 延迟打印，可以得到所有代码处理完之后的uuid
        //     log(node.type, node.name || node.value, node.uuid);
        // }, 0);
        if (ret) {
            return ret;
        }
        return node;
    }
    else {
        log(node.type, ' is not supported');
    }
    return node;
}

export function isDefine(uuid) {
    return global.isEqual('define', uuid) || global.isEqual('eslxDefine', uuid);
}

export function isGlobalRequire(uuid) {
    return global.isEqual('require', uuid) || global.isEqual('eslxRequire', uuid);
}

export function isRequireNode(node) {
    let isGlobal = isGlobalRequire(getUUID(node));
    let variable = getVariable(node, node.scope);
    if (isGlobal) {
        return true;
    }
    else if (variable) {
        return variable.isRequire;
    }
    else {
        return;
    }
}

export function markRequire(variable) {
    variable.isRequire = true;
}

export function generateLiteralNode(value) {
    if (typeof value === 'number' && value < 0) {
        return {
            type: 'UnaryExpression',
            operator: '-',
            argument: {
                type: 'Literal',
                value: -value,
                raw: JSON.stringify(-value)
            }
        };
    }
    return {
        type: 'Literal',
        value: value,
        raw: JSON.stringify(value)
    };
}

export function getVariable(node, scope) {
    let currentScope = scope;
    while(currentScope) {
        let variable = currentScope.set.get(node.name);
        if (variable) {
            return variable
        }
        else {
            currentScope = currentScope.upper;
        }
    }
    // 上面在scope里没找到，说明是全局变量
    // globalScope里只有var、let、const出来的变量，像window这种变量都是没有的
    let variable = global.getByName(node.name);
    return variable;
}

export function getUUID(node) {
    let variable = getVariable(node, node.scope);
    if (variable) {
        return variable.uuid;
    }
    return node.uuid;
}

export function assignUUID(from, to) {
    if (!from || !to) {
        return;
    }
    let varTo = getVariable(to, to.scope); 
    // 有variable就给variable赋值，对应Identifier
    // 其他的类型没有variable，就给node赋值
    let uuid = getUUID(from);
    // 既给variable赋值uuid，也给node赋值uuid
    setUUID(varTo, uuid);
    setUUID(to, uuid);
    // console.log(from.name, to.name);
    // to.uuid = from.uuid || to.uuid;
    // console.log(from.uuid, to.uuid);
}

export function assignResult(from, to) {
    if (!from || !to) {
        return;
    }
    setResult(to, getResult(from));
}

export function setResult(node, result) {
    if (!node) {
        return;
    }
    let variable = getVariable(node, node.scope);
    if (variable) {
        variable.result = result;
    }
    node.result = result;
}

export function getResult(node) {
    if (!node) {
        return;
    }
    let variable = getVariable(node, node.scope);
    if (variable) {
        return variable.result;
    }
    return node.result;
}

export function isModuleDefine(node) {
    let args = node.arguments;
    return args[0].type === 'Literal'
    && args[1].type === 'ArrayExpression'
    && args[2].type === 'FunctionExpression';
}

export function setUUID(node, id) {
    if (!node) {
        return;
    }
    let oldId = node.uuid;
    // console.trace();
    id = ref.add(node, id);
    // node.type && log(oldId + '->' + node.uuid, node.type, node.name);
    return id;
}

export function isType(obj, type) {
    // console.log(obj);
    // console.log(({}).toString.call(obj));
    return ({}).toString.call(obj) === '[object ' + type + ']';
}

export function isTrue(node) {
    if (!node) {
        return false;
    }
    if (node.type === 'Literal') {
        return !!node.value;
    }
    return true;
}

export function isDataType(node) {
    switch (node.type) {
        case 'Literal':
        case 'ObjectExpression':
        case 'ArrayExpression':
            return true;
        default:
            return false;
    }
}
