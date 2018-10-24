import uuid from 'uuid/v4';
import {Variable} from 'escope';

let reserveWord = new Map();

export class Global {

    constructor() {
        this.map = new Map();
        ['window', 'esl', 'eslxDefine'].map(k => this.add(k));
    }

    add(name) {
        let id = uuid();
        let variable = new Variable(name);
        variable.uuid = id;
        // 全局变量名称索引
        this.map.set(name, variable);
        // uuid索引数组，因为变量可能指向同一个uuid
        // 可以理解为Identifier指向Variable，Variable的uuid代表内存
        let uuidSet = this.map.get(uuid);
        if (!uuidSet) {
            this.map.set(uuid, []);
        }
        this.map.get(uuid).push(variable);
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
        else {
            return this.add(name);
        }
    }

    isEqual(name, uuid) {
        let variable = this.getByName(name);
        return variable.uuid === uuid;
    }

}
