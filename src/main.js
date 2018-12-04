import espree from 'espree';
import {genCode} from './gencode';
import parseOptions from './parseOptions';
import espurify from 'espurify';
import {process} from './mangle';
import tracer from 'tracer';
// 搞一个全局的log，方便
let log = tracer.colorConsole({
    format : "<{{file}}:{{line}}> {{message}}"
}).log;
let idx = 0;
global.log = log;
global.indexLog = function (...args) {
    let prefix = [];
    if (args[0] === '>>>') {
        prefix = new Array(idx++);
    }
    else if (args[0] === '<<<') {
        prefix = new Array(--idx);
    }
    prefix.fill('  ');
    args.unshift(prefix.join(''));
    log.call(null, ...args);
}
export async function repack(arr) {
    let astArr = arr.map(({code, filePath}) => {
        // 解析成ast
        let ast = espree.parse(code, parseOptions);
        ast.filePath = filePath;
        return ast;
    });
    // 处理ast
    let mergedAst = process(astArr);
    // 重新生成代码
    return await genCode(mergedAst);
}
