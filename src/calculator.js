import {
    evaluateNode,
    isDefine,
    isGlobalRequire,
    isRequireNode,
    isModuleDefine,
    markRequire,
    generateLiteralNode,
    getVariable,
    getUUID,
    setUUID,
    assignUUID
} from './util';

import {global} from './globalManager';
import {amd} from './amd';
import {ref} from './ref';

export function ArrayExpression(node) {
    node.elements = node.elements.map(evaluateNode);
    return node;
}

export function AssignmentExpression(node) {
    node.left = evaluateNode(node.left);
    node.right = evaluateNode(node.right);
    assignUUID(node.right, node.left);
    return node;
}

export function BlockStatement(node) {
    node.body = node.body.map(evaluateNode);
    return node;
}

export function BreakStatement(node) {
}

export function BinaryExpression(node) {
    node.left = evaluateNode(node.left);
    node.right = evaluateNode(node.right);
    // BinaryExpression经过计算后都会得出新的值
    // uuid一定与之前不同
    setUUID(node);
    // if (node.left.type === 'Literal' && node.left.type === 'Literal') {
    //     let value = eval(node.left.raw + node.operator + node.right.raw); 
    //     return generateLiteralNode(value);
    // }
    return node;
}

export function CatchClause(node) {
    node.param = evaluateNode(node.param);
    node.body = evaluateNode(node.body);
    return node;
}

export function ConditionalExpression(node) {
    node.test = evaluateNode(node.test);
    node.consequent = evaluateNode(node.consequent);
    node.alternate = evaluateNode(node.alternate);
    return node;
}

export function EmptyStatement(node) {
}

export function Identifier(node) {
    setUUID(node);
    return node;
}

export function UnaryExpression(node) {
    node.argument = evaluateNode(node.argument);
    return node;
}

export function UpdateExpression(node) {
    node.argument = evaluateNode(node.argument);
    return node;
}

export function CallExpression(node) {
    node.callee = evaluateNode(node.callee);
    node.arguments = node.arguments.map(evaluateNode);
    let uuid = getUUID(node.callee);

    if (isDefine(uuid) && isModuleDefine(node)) {
        // amd模块的处理
        try {
            amd.registerDefine(node);
            // 找到define里依赖的require
            // 如这里define('xxx', ['require'], function(r) {});
            // 找到r这个变量，标记为require
            let argIndex = node.arguments[1].elements.findIndex(el => el.value === 'require');
            let requireNode = node.arguments[2].params[argIndex];
            // 有可能是这样的形式
            // define('xxx', ['require'], function() {});
            // function的参数是空的，所以requireNode有可能是undefined
            if (requireNode) {
                let requireVariable = getVariable(requireNode, requireNode.scope);
                // 标记当前变量为require
                markRequire(requireVariable);
                // log(requireNode.scope);
            }
        }
        catch (e) {
            log(node);
            throw e;
        }
    }

    // call的时候给function的参数传递引用
    let callee = ref.getByUUID(getUUID(node.callee)).find(item => /Function/.test(item.type));
    if (callee) {
        let functionArgs = callee.params;
        // callee是function，可以传递引用给function的参数
        // 传入的参数可以和定义的参数数量不等，这里处理一下
        node.arguments.map((arg, index) => {
            let functionArg = functionArgs[index];
            if (functionArg) {
                assignUUID(arg, functionArg);
            }
        });
        evaluateNode(callee);
        assignUUID(callee, node);
        // 传递完参数再重新计算callee，让内部uuid正确

    }

    // let uid = getUUID(node.callee);
    // let refs = ref.getByUUID(node.callee.uuid);
    // log(uid, refs);

    // let variables = global.getByUUID()
    return node;
}

export function ContinueStatement(node) {
    return node;
}

export function ExpressionStatement(node) {
    node.expression = evaluateNode(node.expression);
    return node;
}

export function FunctionDeclaration(node) {
    node.id = evaluateNode(node.id);
    node.params = node.params.map(evaluateNode);
    node.body = evaluateNode(node.body);
    assignUUID(node.id, node);
    return node;
}

export function FunctionExpression(node) {
    node.id = evaluateNode(node.id);
    node.params = node.params.map(evaluateNode);
    node.body = evaluateNode(node.body);
    assignUUID(node.id, node);
    return node;
}

export function ForInStatement(node) {
    node.left = evaluateNode(node.left);
    node.right = evaluateNode(node.right);
    node.body = evaluateNode(node.body);
    return node;
}

export function ForOfStatement(node) {
    node.left = evaluateNode(node.left);
    node.right = evaluateNode(node.right);
    node.body = evaluateNode(node.body);
    return node;
}

export function ForStatement(node) {
    node.init = evaluateNode(node.init);
    node.test = evaluateNode(node.test);
    node.update = evaluateNode(node.update);
    node.body = evaluateNode(node.body);
    return node;
}

export function IfStatement(node) {
    node.test = evaluateNode(node.test);
    node.consequent = evaluateNode(node.consequent);
    node.alternate = evaluateNode(node.alternate);
    return node;
}

export function LabeledStatement(node) {
    node.body = evaluateNode(node.body);
    node.label = evaluateNode(node.label);
    return node;
}

export function Literal(node) {
}

export function LogicalExpression(node) {
    node.left = evaluateNode(node.left);
    node.right = evaluateNode(node.right);
    var leftVar = getVariable(node.left);
    var rightVar = getVariable(node.right);
    if (node.operator === '&&') {
        if (leftVar) {
            assignUUID(node.right, node);
        }
        else {
            assignUUID(node.left, node);
        }
    }
    else if (node.operator === '||') {
        if (leftVar) {
            assignUUID(node.left, node);
        }
        else {
            assignUUID(node.right, node);
        }
    }
    return node;
}

export function MemberExpression(node) {
    node.object = evaluateNode(node.object);
    node.property = evaluateNode(node.property);
    if (global.isEqual('window', getUUID(node.object))) {
        // 如果是window，就按照property的uuid给当前node赋值
        assignUUID(node.property, node);
    }

    // 传递数组内部元素的引用
    let obj = ref.getByUUID(getUUID(node.object)).find(item => item.type === 'ArrayExpression');
    let key = ref.getByUUID(getUUID(node.property)).find(item => item.type === 'Literal');
    // log('obj>>>', node.object.name, getUUID(node.object));
    if (obj && key) {
        let index = key.value;
        // 数组中的元素
        let item = obj.elements[index];
        // log(item.type, item.name, item.uuid);
        if (item) {
            // 把元素的uuid传递给node
            assignUUID(item, node);
            // log(item);
        }
    }


    return node;
}

export function NewExpression(node) {
    node.callee = evaluateNode(node.callee);
    node.arguments = node.arguments.map(evaluateNode);
    return node;
}


export function ObjectExpression(node) {
    node.properties = node.properties.map(evaluateNode);
    return node;
}

export function Property(node) {
    node.key = evaluateNode(node.key);
    node.value = evaluateNode(node.value);
    node.alternate = evaluateNode(node.alternate);
    return node;
}

export function Program(node) {
    node.body.map(evaluateNode);
    return node;
}

export function ReturnStatement(node) {
    node.argument = evaluateNode(node.argument);
    assignUUID(node.argument, node);
    log(node.scope);
    return node;
}

export function SequenceExpression(node) {
    node.expressions = node.expressions.map(evaluateNode);
    return node;
}

export function SwitchCase(node) {
    node.consequent = node.consequent.map(evaluateNode);
    node.test = evaluateNode(node.test);
    return node;
}

export function SwitchStatement(node) {
    node.discriminant = evaluateNode(node.discriminant);
    node.cases = node.cases.map(evaluateNode);
    return node;
}

export function ThisExpression(node) {
}

export function ThrowStatement(node) {
    node.argument = evaluateNode(node.argument);
    return node;
}

export function TryStatement(node) {
    node.block = evaluateNode(node.block);
    node.finalizer = evaluateNode(node.finalizer);
    return node;
}

export function VariableDeclaration(node) {
    node.declarations = node.declarations.map(evaluateNode);
    return node;
}

export function VariableDeclarator(node) {
    node.id = evaluateNode(node.id);
    node.init = evaluateNode(node.init);
    assignUUID(node.init, node.id);
    return node;
}


export function WhileStatement(node) {
    node.test = evaluateNode(node.test);
    node.body = evaluateNode(node.body);
    return node;
}

