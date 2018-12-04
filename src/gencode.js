import escodegen from 'escodegen';
import {writeFile} from './util';
export async function genCode(mergedAst) {
    return Promise.all(mergedAst.body.map(async ast => {
        let filePath = ast.filePath;
        let code = escodegen.generate(ast);
        await writeFile(filePath, code);
        return {
            code,
            ast,
            filePath
        };
    }));
}
