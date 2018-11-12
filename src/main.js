import espree from 'espree';
import escodegen from 'escodegen';
import parseOptions from './parseOptions';
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
export function repack(code) {
    // 解析成ast
    let ast = espree.parse(code, parseOptions);
    // 处理ast
    process(ast);
    // 重新生成代码
    let generatedCode = escodegen.generate(ast);
    return {
        ast,
        code: generatedCode
    };
}
