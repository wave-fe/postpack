import esvalid from 'esvalid';
import * as handler from './fixhandler';
import {nodePath} from './util';

export function valid(ast) {
    let errors = esvalid.errors(ast);
    let errorMessage = errors.map(item => item.message + '\n' + nodePath(item.node)).join('\n');
    if (errorMessage) {
        log(errorMessage);
        // log(errors[0].node);
        process.exit(1);
    }
}

export function fix(ast) {
    let errors = esvalid.errors(ast);
    errors.map(({node}) => handler[node.type](node));
}
