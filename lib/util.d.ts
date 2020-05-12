import { BlankNode, Variable } from "rdf-js";
export declare type JsonLdId = {
    "@id": string;
};
export declare type JsonLdTerm = number | string | boolean | JsonLdId | JsonLdLiteral;
export declare type JsonLdLiteral = {
    "@value": string;
    "@type"?: string;
    "@language"?: string;
};
export declare function isJsonLdId(node: BlankNode | Variable | JsonLdId): node is JsonLdId;
export declare function getJson(node: BlankNode | Variable | JsonLdId | string): variable | blankNode;
declare type blankNode = {
    termType: "BlankNode";
    value: string;
};
declare type variable = {
    termType: "Variable";
    value: string;
};
export {};
