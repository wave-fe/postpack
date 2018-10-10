let defineMap = {};

export function markDefineByRequire() {
}

/**
 * 通过namespace获取define的ast
 *
 * @param {string} ns namespace
 *
 * @return {Object|undefined} ast
 */
export function getDefine(ns) {
    return;
}


export function registerDefine(node) {
    let ns = node.arguments[0].value;
    defineMap[ns] = node;
}

export function clearDefine() {
    defineMap = {};
}
