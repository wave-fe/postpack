export class Amd {
    constructor() {
        this.map = new Map();
    }

    register(node) {
        if (node.type !== 'CallExpression') {
            return;
        }
        // 针对define('xxx', function () {})的定义
        let namespace = node.arguments[0].value;
        this.map.set(namespace, node);
    }

    isUsed(namespace) {
        return this.map.has(namespace);
    }
}
