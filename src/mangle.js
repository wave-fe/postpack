import {replace} from 'estraverse';
import {valid} from './valid';
import esquery from 'esquery';
import {analyze} from 'escope';
import {shake} from './shake';
import {
    traverseNode,
    setUsed,
    setUUID,
    evaluateNode
} from './util';

import {ref} from './ref';
import parseOptions from './parseOptions';

export function process(ast) {
    // log(esquery(ast,'CallExpression>ArrayExpression>FunctionExpression').length)
    let scopeManager = analyze(ast, parseOptions);
    let currentScope = scopeManager.acquire(ast);
    // setUsed(ast);
    // 设置所有node的scope
    replace(ast, {
        enter: function (node, parent) {
            if (node !== parent) {
                node.parent = parent;
            }
            node.opt = node.opt || {};
            // 进入新的scope
            currentScope = scopeManager.acquire(node) || currentScope;
            currentScope.variables.map(v => setUUID(v));
            // console.log(currentScope.references.map(r => r.identifier.name));
            node.scope = currentScope;

            setUUID(node);
        },
        leave: function (node) {
            currentScope = scopeManager.release(node) || currentScope;
            // do stuff
        }
    });
    // log(ref.toString());
    // 先对所有节点进行计算
    ast = evaluateNode(ast);
    // 有些节点是新创建的，opt没有，要补一下
    // replace(ast, {
    //     enter: function (node, parent) {
    //         if (node !== parent) {
    //             node.parent = parent;
    //         }
    //         node.opt = node.opt || {};
    //     }
    // });

    // 对所有节点进行处理
    // traverseNode(ast);
    // 对require做特殊处理，找到所有require的模块，标记define为不删除
    // console.log(ast.scope.variables.map(v => v.name));
    // console.log(ast.scope.references.map(r => r.identifier.name));
    // console.log(ast.scope.references);

    // log(ast.body[1].expression.arguments[0].elements);
    // 把没标记的node删掉
    shake(ast);
    valid(ast);
    // log(ast.body[1].expression.arguments[0].elements[1].body);
    // log(ref.toString());
    // console.log(ast.body[0]);
    // log(ast.body[0].declarations[0].init);
    return ast;
}
