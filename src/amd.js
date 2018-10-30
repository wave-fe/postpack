import {getUUID} from './util';
export class Amd {
    constructor() {
        this.define = new Map();
        this.require = new Map();
    }

    registerDefine(node) {
        if (node.type !== 'CallExpression') {
            return;
        }
        // 针对define('xxx', function () {})的定义
        let namespace = node.arguments[0].value;
        this.define.set(namespace, node);
    }

    registerRequire(node) {
        if (node.type !== 'CallExpression') {
            return;
        }
        // 针对define('xxx', function () {})的定义
        let namespace = node.arguments[0].value;
        this.require.set(namespace, node);
    }

    isUsed(namespace) {
        return this.define.has(namespace);
    }

    getUnUsedDefine() {
        let ret = new Map();
        for (var [key, value] of this.define) {
            if (!this.require.has(key)) {
                ret.set(key, value);
            }
        }
        return ret;
    }

    getDefineByNamespace(namespace) {
        return this.define.get(namespace);
    }
}

export let amd = new Amd();
