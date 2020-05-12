"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isJsonLdId(node) {
    return node.hasOwnProperty("@id");
}
exports.isJsonLdId = isJsonLdId;
function getJson(node) {
    if (typeof node === "string") {
        return idToJson(node);
    }
    else if (isJsonLdId(node)) {
        return idToJson(node["@id"]);
    }
    const { termType, value } = node;
    return { termType, value };
}
exports.getJson = getJson;
function idToJson(id) {
    if (id.slice(0, 2) === "_:") {
        return { termType: "BlankNode", value: id };
    }
    else if (id[0] === "?") {
        return { termType: "Variable", value: id };
    }
    else {
        return null;
    }
}
//# sourceMappingURL=util.js.map