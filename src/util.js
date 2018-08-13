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
            // variable.defs.map(def => {
            //     if (def.node !== node) {
            //         setUsed(def.node);
            //     }
            // });
            let defs = variable.defs;
            let def = defs[defs.length - 1];
            if (def.node !== node) {
                // log(def.node);
                setUsed(def.node);
            }
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

