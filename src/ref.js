import {
    getUUID,
    isType,
    setUUID
} from './util';

import uuid from 'uuid/v4';

export class Ref {
    constructor() {
        this.map = new Map();
    }

    add(node, newUUID) {
        // 如果没传newUUID，就用原始的，再没有就新增一个
        newUUID = newUUID || getUUID(node) || uuid();
        let lastUUID = getUUID(node);
        node.uuid = newUUID;
        // 创建索引
        if (!this.map.has(newUUID)) {
            let newSet = new Set();
            this.map.set(newUUID, newSet);
            newSet.add(node);
        }
        // 把旧索引删掉
        let lastUUIDSet = this.map.get(lastUUID);
        lastUUIDSet && lastUUIDSet.delete(node);
        return newUUID;
    }

    getByUUID(uuid, type) {
        let set = this.map.get(uuid) || new Set();
        let ret = [];
        set.forEach(item => {
            if (type) {
                if (isType(item, type)) {
                    ret.push(item);
                }
            }
            else {
                ret.push(item);
            }
        });
        return ret;
    }
}

export let ref = new Ref();
