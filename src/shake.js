import {replace} from 'estraverse';

export function shake(ast) {
    replace(ast, {
        enter: function (node, parent) {
            if (!node.opt || !node.opt.used) {
                // log(node);
                this.remove();
            }
        }
    });
    return ast;
}
