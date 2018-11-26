import {repack} from '../src';
import fs from 'fs';
import path from 'path';

let name = process.argv[2] || test0;
fs.readFile(path.join(__dirname, './' + name + '.js'), function (err, data) {
// fs.readFile(path.join(__dirname, './boxjs_new.js'), function (err, data) {
    if (err) {
        throw err;
    }
    let {code, ast} = repack(data);
    console.log(code);
});

