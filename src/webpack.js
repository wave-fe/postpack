import esquery from 'esquery';
import {isUsed, evaluateNode} from './util';


function indexModules(ast) {
    let map = {1:[0]};
    let modules = esquery(ast, 'CallExpression>ArrayExpression>FunctionExpression');
    // 处理每一个模块的function
    modules.map((module, modIdx) => {
        let requireNode = module.params[2];
        if (!requireNode) {
            return;
        }
        let refs = requireNode.scope.references.find(ref => ref.identifier.name === requireNode.name);
        // 在当前scope里找到所有ref
        requireNode.scope.references
            .filter(ref => ref.identifier.name === requireNode.name)
            .map(ref => {
                let parent = ref.identifier.parent;
                // 如果父节点是调用，并且参数是数字，就代表这个确实是require
                if (
                    parent
                    && parent.type === 'CallExpression'
                    && parent.arguments.length
                ) {
                    let value = parent.arguments[0].value;
                    if (Number.isInteger(value)) {
                        // 建立模块索引
                        map[modIdx] = map[modIdx] || [];
                        map[modIdx].push(value);
                    }
                }
            });
    });
    return {
        modules,
        map
    };
}

export function webpack(ast) {
    let {modules, map} = indexModules(ast);
    log(map);
    modules.map((functionNode, index) => {
        if (isUsed(functionNode)) {
            let relatedModules = map[index] || [];
            relatedModules.map(idx => {
                evaluateNode(modules[idx], true);
            });
        }
    })
}
