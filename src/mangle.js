import {replace} from 'estraverse';
import esquery from 'esquery';
import {analyze} from 'escope';
import {shake} from './shake';
import {traverseNode, setUsed} from './util';

import parseOptions from './parseOptions';

export function process(ast) {
    let scopeManager = analyze(ast, parseOptions);
    let currentScope = scopeManager.acquire(ast);
    setUsed(ast);
    // 设置所有node的scope
    replace(ast, {
        enter: function (node, parent) {
            if (node !== parent) {
                node.parent = parent;
            }
            node.opt = node.opt || {};
            // 进入新的scope
            currentScope = scopeManager.acquire(node) || currentScope;
            node.scope = currentScope;
        },
        leave: function(node) {
            currentScope = scopeManager.release(node) || currentScope;
            // do stuff
        }
    });

    // 对所有节点进行处理
    traverseNode(ast);

    // 把没标记的node删掉
    shake(ast);
    // log(ast.body[0].declarations[0].init);
    return ast;
}
