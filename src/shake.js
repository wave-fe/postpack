import {replace} from 'estraverse';
import {isUsed} from './util';
import {fix} from './valid';
import {ArrayExpression} from './fixhandler';

export function shake(ast) {
    replace(ast, {
        enter: function (node, parent) {
            // log(node.type, node.name || node.value);
            if (!isUsed(node)) {
                this.remove();
            }
            else if (node.type === 'ArrayExpression') {
                // array要特殊处理，因为里面的元素remove以后就不占位了，会导致位置错乱
                return ArrayExpression(node);
            }
        }
    });

    fix(ast);

    return ast;
}
