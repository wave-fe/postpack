import {repack} from '../src';
import fs from 'fs';
import path from 'path';
import {amd} from '../src/amd';

fs.readFile(path.join(__dirname, './test4.js'), function (err, data) {
    if (err) {
        throw err;
    }
    let {code, ast} = repack(data);
    console.log('>>>unused')
    console.log(amd.getUnUsedDefine().forEach((k, v) => console.log(v)));
    console.log('<<<unused')
    // console.log(JSON.stringify(ast, null, 4));
    // console.log(ast.scope.variables);
    // console.log(ast);
    console.log(code);
});

