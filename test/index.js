import {repack} from '../src';
import fs from 'fs';
import path from 'path';

fs.readFile(path.join(__dirname, './test6.js'), function (err, data) {
// fs.readFile(path.join(__dirname, './boxjs_new.js'), function (err, data) {
    if (err) {
        throw err;
    }
    let {code, ast} = repack(data);
    console.log(code);
});

