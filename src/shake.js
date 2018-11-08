import {replace} from 'estraverse';
import * as handler from './shakehandler';

/**
 * 不怎么写注释的我，必须要找机会写一段
 * shake的过程就是删掉没有用的node，但是删掉之后父节点有可能有问题
 * 例如：一个function () {}，解析完会有id,params,body三个部分
 * body被删了，重新生成代码的时候就挂了，所以每次node被删除的时候要修复节点
 *
 */
export function fixNode(node) {
    if (!node) {
        return;
    }
    let func = handler[node.type];
    if (func) {
        func(node);
    }
}

export function shake(ast) {
    replace(ast, {
        enter: function (node, parent) {
            if (!node.opt || !node.opt.used) {
                this.remove();
            }
        },
        leave: function (node, parent) {
            fixNode(node);
        }
    });
    return ast;
}
