import {repack} from '../src';
import fs from 'fs';
import path from 'path';
import {readFile} from '../src/util';

(async function () {

    let fileArr = [];
    for (var i = 2; i < process.argv.length; i++) {
        let filePath = path.join(process.argv[i] + '.js');
        let targetPath = path.join(process.argv[i] + '.postpack.js');
        fileArr.push({
            code: await readFile(filePath),
            filePath: targetPath
        });
    }
    let infos = await repack(fileArr);
    infos.map(({code}) => log(code));

})();
