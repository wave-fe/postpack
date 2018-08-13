import {traverseNode, setNodeUsed} from './util';

export function AssignmentExpression(node) {
    setNodeUsed(node);
    traverseNode(node.left);
    traverseNode(node.right);
}

export function BlockStatement(node) {
    setNodeUsed(node);
    node.body.map(traverseNode);
}

export function BreakStatement(node) {
    setNodeUsed(node);
}

export function BinaryExpression(node) {
    setNodeUsed(node);
    traverseNode(node.left);
    traverseNode(node.right);
}

export function Identifier(node) {
    setNodeUsed(node);
}

export function UnaryExpression(node) {
    setNodeUsed(node);
    traverseNode(node.argument);
}

export function CallExpression(node) {
    setNodeUsed(node);
    traverseNode(node.callee);
    node.arguments.map(traverseNode);
}

export function ExpressionStatement(node) {
    setNodeUsed(node);
    traverseNode(node.expression);
}

export function Literal(node) {
    setNodeUsed(node);
}

export function MemberExpression(node) {
    setNodeUsed(node);
    traverseNode(node.object);
    traverseNode(node.property);
    // log(node.object.name);
}

export function Program(node) {
    setNodeUsed(node);
    node.body.map(traverseNode);
}


export function VariableDeclarator(node) {
    setNodeUsed(node);
    traverseNode(node.id);
    traverseNode(node.init);
    // log(node.init);
    // 通过引用找到declarator
    // 是var a = 0; 中的a
    // a被标记后还需要标记整句话
    // 所以要对parent进行处理
    setNodeUsed(node.parent);
}

export function VariableDeclaration(node) {
    setNodeUsed(node);
    node.declarations.map(traverseNode);
}


export function FunctionDeclaration(node) {
    setNodeUsed(node);
    traverseNode(node.id);
    traverseNode(node.body);
}

export function WhileStatement(node) {
    setNodeUsed(node);
    traverseNode(node.test);
    traverseNode(node.body);
}

export function IfStatement(node) {
    setNodeUsed(node);
    traverseNode(node.test);
    traverseNode(node.consequent);
    traverseNode(node.alternate);
}

export function Property(node) {
    setNodeUsed(node);
    traverseNode(node.key);
    traverseNode(node.value);
    traverseNode(node.alternate);
}

export function ReturnStatement(node) {
    setNodeUsed(node);
    traverseNode(node.argument);
}

export function SwitchCase(node) {
    setNodeUsed(node);
    node.consequent.map(traverseNode);
    traverseNode(node.test);
}

export function SwitchStatement(node) {
    setNodeUsed(node);
    traverseNode(node.discriminant);
    node.cases.map(traverseNode);
}
