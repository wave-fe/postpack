import {evaluateNode} from './util';
import {global} from './globalManager';
import uuid from 'uuid/v4';
import {amd} from './amd';


function isDefine(uuid) {
    return global.isEqual('define', uuid) || global.isEqual('eslxDefine', uuid);
}

function isRequire(uuid) {
    return global.isEqual('require', uuid) || global.isEqual('eslxRequire', uuid);
}


function generateLiteralNode(value) {
    if (typeof value === 'number' && value < 0) {
        return {
            type: 'UnaryExpression',
            operator: '-',
            argument: {
                type: 'Literal',
                value: -value,
                raw: JSON.stringify(-value)
            }
        };
    }
    return {
        type: 'Literal',
        value: value,
        raw: JSON.stringify(value)
    };
}

function getVariable(node, scope) {
    let currentScope = scope;
    while(currentScope) {
        let variable = currentScope.set.get(node.name);
        if (variable) {
            return variable
        }
        else {
            currentScope = currentScope.upper;
        }
    }
    // 上面在scope里没找到，说明是全局变量
    // globalScope里只有var、let、const出来的变量，像window这种变量都是没有的
    let variable = global.getByName(node.name);
    return variable;
}

function getUUID(node) {
    let variable = getVariable(node, node.scope);
    if (variable) {
        return variable.uuid;
    }
    return node.uuid;
}

function assignUUID(from, to) {
    let varFrom = getVariable(from, from.scope); 
    let varTo = getVariable(to, to.scope); 
    // 有variable就给variable赋值，对应Identifier
    // 其他的类型没有variable，就给node赋值
    (varTo || to).uuid = (varFrom || from).uuid;
    // console.log(from.name, to.name);
    // to.uuid = from.uuid || to.uuid;
    // console.log(from.uuid, to.uuid);
}

export function ArrayExpression(node) {
    node.elements = node.elements.map(evaluateNode);
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
    if (node.left.type === 'Literal' && node.left.type === 'Literal') {
        let value = eval(node.left.raw + node.operator + node.right.raw); 
        return generateLiteralNode(value);
    }
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
    node.uuid = uuid();
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

    if (isDefine(uuid)) {
        amd.registerDefine(node);
    }

    if (isRequire(uuid)) {
        amd.registerRequire(node);
    }

    // let variables = global.getByUUID()
    return node;
}

export function ContinueStatement(node) {
}

export function ExpressionStatement(node) {
    node.expression = evaluateNode(node.expression);
    return node;
}

export function FunctionDeclaration(node) {
    node.id = evaluateNode(node.id);
    node.params = node.params.map(evaluateNode);
    node.body = evaluateNode(node.body);
    return node;
}

export function FunctionExpression(node) {
    node.id = evaluateNode(node.id);
    node.params = node.params.map(evaluateNode);
    node.body = evaluateNode(node.body);
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
    else {
        // 如果不是，就代表是变量属性，需要一个新的uuid
        node.uuid = uuid();
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
    return node;
}


export function WhileStatement(node) {
    node.test = evaluateNode(node.test);
    node.body = evaluateNode(node.body);
    return node;
}

