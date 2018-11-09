import {replace} from 'estraverse';
import {isUsed} from './util';
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
        return func(node);
    }
    else {
        log('shake handler: ', node.type, ' is not found');
    }
}

export function shake(ast) {
    replace(ast, {
        enter: function (node, parent) {
            // log(node.type, node.name || node.value);
            if (!isUsed(node)) {
                let newNode = fixNode(node);
                if (newNode) {
                    return newNode;
                }
                else {
                    this.remove();
                }
            }
            else if (node.type === 'ArrayExpression') {
                // array要特殊处理，因为里面的元素remove以后就不占位了，会导致位置错乱
                return handler.ArrayExpression(node);
            }
        }
    });
    return ast;
}
