import {Variable} from 'escope';
import {
    setUUID
} from './util';

import uuid from 'uuid/v4';

export class Global {

    constructor() {
        this.map = new Map();
        [
            'window',
            'define',
            'eslxDefine',
            'require',
            'eslxRequire'
        ].map(k => this.add(k));
    }

    has(name) {
        return this.map.has(name);
    }

    add(name) {
        let variable = new Variable(name);
        let id = uuid();
        variable.uuid = id;

        // 这里为什么不这么写？因为循环引用node竟然没法初始化，setUUID的模块里所有import都是未初始化状态，会报错
        // let id = setUUID(variable);
        // 全局变量名称索引
        this.map.set(name, variable);
        // uuid索引数组，因为变量可能指向同一个uuid
        // 可以理解为Identifier指向Variable，Variable的uuid代表内存
        let uuidSet = this.map.get(id);
        if (!uuidSet) {
            this.map.set(id, []);
        }
        this.map.get(id).push(variable);
        return variable;
    }

    getByUUID(uuid) {
        if (!uuid) {
            return [];
        }
        return this.map.get(uuid) || [];
    }

    getByName(name) {
        if (!name) {
            return;
        }
        let variable = this.map.get(name);
        if (variable) {
            return variable;
        }
    }

    isEqual(name, uuid) {
        let variable = this.getByName(name);
        if (variable) {
            return variable.uuid === uuid;
        }
        return false;
    }

}
export let global = new Global();
