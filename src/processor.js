import {
    getUUID,
    isGlobalRequire,
    isRequireNode,
    traverseNode,
    isNodeUsed,
    setNodeUsed
} from './util';

import {amd} from './amd';

export function ArrayExpression(node) {
    setNodeUsed(node);
    node.elements.map(traverseNode);
}

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

export function CatchClause(node) {
    setNodeUsed(node);
    traverseNode(node.param);
    traverseNode(node.body);
}

export function ConditionalExpression(node) {
    setNodeUsed(node);
    traverseNode(node.test);
    traverseNode(node.consequent);
    traverseNode(node.alternate);
}

export function EmptyStatement(node) {
    setNodeUsed(node);
}

export function Identifier(node) {
    setNodeUsed(node);
}

export function UnaryExpression(node) {
    setNodeUsed(node);
    traverseNode(node.argument);
}

export function UpdateExpression(node) {
    setNodeUsed(node);
    traverseNode(node.argument);
}

export function CallExpression(node) {
    // log(node.callee);
    // console.log('>>>', node.callee.name);
    setNodeUsed(node);
    traverseNode(node.callee);
    node.arguments.map(traverseNode);
    // 遍历define
    let uuid = getUUID(node.callee);
    if (isRequireNode(node.callee)) {
        let namespace = node.arguments[0].value;
        let def = amd.getDefineByNamespace(namespace);
        log('>>>');
        traverseNode(def, true);
        //console.log(def);
        // log('<<<');
    }
}

export function ContinueStatement(node) {
    // log(node.callee);
    setNodeUsed(node);
    traverseNode(node.label);
}

export function ExpressionStatement(node) {
    setNodeUsed(node);
    traverseNode(node.expression);
    // if(isNodeUsed(node.expression)) {
    //     setNodeUsed(node);
    // }
}

/**
 * FunctionDeclaration会在traverseNode的时候略过，
 * 只有被其他语句显式调用时会走到这里
 * 详见traverseNode实现
 */
export function FunctionDeclaration(node) {
    setNodeUsed(node);
    traverseNode(node.id);
    node.params.map(traverseNode);
    traverseNode(node.body);
}

export function FunctionExpression(node) {
    setNodeUsed(node);
    traverseNode(node.id);
    node.params.map(traverseNode);
    traverseNode(node.body);
}

export function ForInStatement(node) {
    setNodeUsed(node);
    traverseNode(node.left);
    traverseNode(node.right);
    traverseNode(node.body);
}

export function ForOfStatement(node) {
    setNodeUsed(node);
    traverseNode(node.left);
    traverseNode(node.right);
    traverseNode(node.body);
}

export function ForStatement(node) {
    setNodeUsed(node);
    traverseNode(node.init);
    traverseNode(node.test);
    traverseNode(node.update);
    traverseNode(node.body);
}

export function IfStatement(node) {
    setNodeUsed(node);
    traverseNode(node.test);
    traverseNode(node.consequent);
    traverseNode(node.alternate);
}

export function LabeledStatement(node) {
    setNodeUsed(node);
    traverseNode(node.body);
    traverseNode(node.label);
}

export function Literal(node) {
    setNodeUsed(node);
}

export function LogicalExpression(node) {
    setNodeUsed(node);
    traverseNode(node.left);
    traverseNode(node.right);
}

export function MemberExpression(node) {
    setNodeUsed(node);
    traverseNode(node.object);
    traverseNode(node.property);
    // log(node.object.name);
}

export function NewExpression(node) {
    setNodeUsed(node);
    traverseNode(node.callee);
    node.arguments.map(traverseNode);
}


export function ObjectExpression(node) {
    setNodeUsed(node);
    node.properties.map(traverseNode);
}

export function Property(node) {
    setNodeUsed(node);
    traverseNode(node.key);
    traverseNode(node.value);
    traverseNode(node.alternate);
}

export function Program(node) {
    setNodeUsed(node);
    node.body.map(traverseNode);
}

export function ReturnStatement(node) {
    setNodeUsed(node);
    traverseNode(node.argument);
}

export function SequenceExpression(node) {
    setNodeUsed(node);
    node.expressions.map(traverseNode);
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

export function ThisExpression(node) {
    setNodeUsed(node);
}

export function ThrowStatement(node) {
    setNodeUsed(node);
    traverseNode(node.argument);
}

export function TryStatement(node) {
    setNodeUsed(node);
    traverseNode(node.block);
    traverseNode(node.finalizer);
}

export function VariableDeclaration(node) {
    setNodeUsed(node);
    node.declarations.map(traverseNode);
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


export function WhileStatement(node) {
    setNodeUsed(node);
    traverseNode(node.test);
    traverseNode(node.body);
}

