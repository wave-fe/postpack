import espree from 'espree';
import escodegen from 'escodegen';
import parseOptions from './parseOptions';
import {process} from './mangle';
import tracer from 'tracer';
// 搞一个全局的log，方便
global.log = tracer.colorConsole({
    format : "<{{file}}:{{line}}> {{message}}"
}).log;
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
