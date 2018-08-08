import {repack} from '../src';
import fs from 'fs';
import path from 'path';

fs.readFile(path.join(__dirname, './test.js'), function (err, data) {
    if (err) {
        throw err;
    }
    let {code, ast} = repack(data);
    // console.log(JSON.stringify(ast, null, 4));
    // console.log(ast.body);
    console.log(code);
});

