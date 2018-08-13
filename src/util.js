import * as processor from './processor';
import {replace} from 'estraverse';

export function setNodeUsed(node) {
    if (!node) {
        return;
    }
    node.opt = node.opt || {};
    // if (!node.opt.used) {
    //     log(node.type);
    // }
    node.opt.used = true;
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
    node.opt.processed = true;
    setTypeUsed(node);
    if (node.type === 'Identifier') {
        // 如果是Identifier就要计算是不是闭包里的，要找到引用到的定义，设置为使用过
        let variable = getClosureVariable(node);
        if (variable) {
            variable.defs.map(def => {
                if (def.node !== node) {
                    setUsed(def.node);
                }
            });
        }
    }
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

export function isTopNode({type}) {
    switch (type) {
        case 'Program':
        case 'FunctionDeclaration':
        case 'ArrowFunctionExpression':
        case 'ArrowFunctionExpression':
        case 'BlockStatement':
        case 'ForStatement':
        case 'ForInStatement':
        case 'ForOfStatement':
            return true;
        default:
            return false;
    }
}

export function getTopNode(node) {
    while (!isTopNode(node)) {
        node = node.parent;
    }
    return node;
}

// 先设置变量定义、function定义为删除的，如果被其他node引用，则在后续操作里改为不删除
let excludeNodes = [
    'VariableDeclaration', 'VariableDeclarator', 'FunctionDeclaration' 
];


export function traverseNode(node) {
    if (!node) {
        return;
    }
    // setUsed(node);
    if (!excludeNodes.find(type => node.type === type)) {
        setUsed(node);
    }
    // 遍历所有node，排除上面的node，其他的都处理
    // replace(node, {
    //     enter: function (node, parent) {
    //         if (!node) {
    //             return;
    //         }
    //         if (!excludeNodes.find(type => node.type === type)) {
    //             setUsed(node);
    //         }
    //         else {
    //             // 当前节点没有被引用，则直接skip
    //             this.skip();
    //         }
    //     }
    // });
}

