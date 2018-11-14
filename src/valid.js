import esvalid from 'esvalid';
import * as handler from './fixhandler';

export function valid(ast) {
    let errors = esvalid.errors(ast);
    let errorMessage = errors.map(item => {
        let pathArr = [item.message];
        let node = item.node;
        while (node = node.parent) {
            let name = node.name || node.value;
            pathArr.push(node.type + (name ? '(' + name + ')' : ''));
        }
        return '\n' + pathArr.reverse()
            .map((item, index)=> 
                (new Array(index))
                .fill('  ')
                .join('') + item
            )
            .join('\n');
    }).join('\n');
    if (errorMessage) {
        log(errorMessage);
        process.exit(1);
    }
}

export function fix(ast) {
    let errors = esvalid.errors(ast);
    errors.map(({node}) => handler[node.type](node));
}
