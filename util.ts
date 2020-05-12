import { BlankNode, Variable } from "rdf-js"

export type JsonLdId = { "@id": string }
export type JsonLdTerm = number | string | boolean | JsonLdId | JsonLdLiteral

export type JsonLdLiteral = {
	"@value": string
	"@type"?: string
	"@language"?: string
}

export function isJsonLdId(
	node: BlankNode | Variable | JsonLdId
): node is JsonLdId {
	return node.hasOwnProperty("@id")
}

export function getJson(
	node: BlankNode | Variable | JsonLdId | string
): variable | blankNode {
	if (typeof node === "string") {
		return idToJson(node)
	} else if (isJsonLdId(node)) {
		return idToJson(node["@id"])
	}

	const { termType, value } = node
	return { termType, value }
}

function idToJson(id: string): blankNode | variable {
	if (id.slice(0, 2) === "_:") {
		return { termType: "BlankNode", value: id }
	} else if (id[0] === "?") {
		return { termType: "Variable", value: id }
	} else {
		return null
	}
}

type quad = { subject: term; predicate: term; object: term; graph: term }
type term = namedNode | blankNode | literal | defaultGraph | variable
type namedNode = { termType: "NamedNode"; value: string }
type blankNode = { termType: "BlankNode"; value: string }
type variable = { termType: "Variable"; value: string }
type defaultGraph = { termType: "DefaultGraph" }
type literal = {
	termType: "Literal"
	value: string
	language: string
	datatype: namedNode
}
