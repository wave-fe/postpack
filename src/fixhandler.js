import {isUsed} from './util';

function genEmptyNode() {
    return genNode('EmptyStatement');
}

function genUndefinedNode() {
    return genNode('Identifier', {name: 'undefined'});
}

function genNode(type, args = {}) {
    return Object.assign({
        type,
        opt: {
            used: true
        }
    }, args);
}

export function ArrayExpression(node) {
    // 数组缺项用undefined补上
    node.elements = node.elements.map(item => {
        return isUsed(item) ? item : genUndefinedNode();
    });
}

export function AssignmentExpression(node) {
    node.right = node.right || genUndefinedNode();
}

export function BlockStatement(node) {
    // 去掉body里多余的EmptyStatement，防止生成多余的分号
    node.body = node.body.filter(item => item.type !== 'EmptyStatement');
}

export function BreakStatement(node) {
}

export function BinaryExpression(node) {
}

export function CatchClause(node) {
}

export function ConditionalExpression(node) {
    node.consequent = node.consequent || genUndefinedNode();
    node.alternate = node.alternate || genUndefinedNode();
}

export function EmptyStatement(node) {
}

export function Identifier(node) {
}

export function UnaryExpression(node) {
}

export function UpdateExpression(node) {
}

export function CallExpression(node) {
}

export function ContinueStatement(node) {
}

export function ExpressionStatement(node) {
    node.expression = node.expression || genEmptyNode();
}

export function FunctionDeclaration(node) {
    node.body = node.body || genNode('BlockStatement', {body: []});
}

export function FunctionExpression(node) {
    // log(node.body);
    node.body = node.body || genNode('BlockStatement', {body: []});
    // log(node.body);
}

export function ForInStatement(node) {
}

export function ForOfStatement(node) {
}

export function ForStatement(node) {
}

export function IfStatement(node) {
    node.consequent = node.consequent || genEmptyNode();
}

export function LabeledStatement(node) {
}

export function Literal(node) {
}

export function LogicalExpression(node) {
}

export function MemberExpression(node) {
}

export function NewExpression(node) {
}


export function ObjectExpression(node) {
}

export function Property(node) {
}

export function Program(node) {
}

export function ReturnStatement(node) {
}

export function SequenceExpression(node) {
}

export function SwitchCase(node) {
}

export function SwitchStatement(node) {
}

export function ThisExpression(node) {
}

export function ThrowStatement(node) {
}

export function TryStatement(node) {
}

export function VariableDeclaration(node) {
}

export function VariableDeclarator(node) {
} 

export function WhileStatement(node) {
}

