import {evaluateNode} from './util';

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

export function ArrayExpression(node) {
    node.elements = node.elements.map(evaluateNode);
}

export function AssignmentExpression(node) {
    node.left = evaluateNode(node.left);
    node.right = evaluateNode(node.right);
    // node.operator = '-';
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
        let value = eval(node.left.value + node.operator + node.right.value); 
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
    node.body = node.body.map(evaluateNode);
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
    return node;
}

export function MemberExpression(node) {
    node.object = evaluateNode(node.object);
    node.property = evaluateNode(node.property);
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

