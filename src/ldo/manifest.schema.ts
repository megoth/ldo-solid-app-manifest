import { Schema } from "shexj";

/**
 * =============================================================================
 * manifestSchema: ShexJ Schema for manifest
 * =============================================================================
 */
export const manifestSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://icanhasweb.net/shapes/manifest.ttl#Document",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#Document",
                ],
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#list",
              valueExpr: "https://icanhasweb.net/shapes/manifest.ttl#Manifest",
              min: 0,
              max: -1,
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://icanhasweb.net/shapes/manifest.ttl#Manifest",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#Manifest",
                ],
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#appName",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "http://www.w3.org/1999/02/22-rdf-syntax-ns#appDescription",
              valueExpr: {
                type: "NodeConstraint",
                datatype:
                  "http://graphite.ecs.soton.ac.uk/xtypes/#xtypes:Fragment-Markdown",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#appUrl",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2000/01/rdf-schema#Resource",
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#supports",
              valueExpr: "https://icanhasweb.net/shapes/manifest.ttl#Support",
              min: 0,
              max: -1,
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://icanhasweb.net/shapes/manifest.ttl#Support",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#Support",
                ],
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2000/01/rdf-schema#Class",
              },
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#url",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
  ],
};
