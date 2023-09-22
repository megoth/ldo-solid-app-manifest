import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * manifestContext: JSONLD Context for manifest
 * =============================================================================
 */
export const manifestContext: ContextDefinition = {
  type: {
    "@id": "@type",
    "@container": "@set",
  },
  Document:
    "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#Document",
  list: {
    "@id": "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#list",
    "@type": "@id",
    "@container": "@set",
  },
  Manifest:
    "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#Manifest",
  appName: {
    "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#appName",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  appDescription: {
    "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#appDescription",
    "@type": "http://graphite.ecs.soton.ac.uk/xtypes/#xtypes:Fragment-Markdown",
  },
  appUrl: {
    "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#appUrl",
    "@type": "http://www.w3.org/2000/01/rdf-schema#Resource",
  },
  supports: {
    "@id":
      "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#supports",
    "@type": "@id",
    "@container": "@set",
  },
  Support:
    "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#Support",
  type2: {
    "@id": "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#type",
    "@type": "http://www.w3.org/2000/01/rdf-schema#Class",
  },
  url: {
    "@id": "https://github.com/megoth/ldo-solid-app-manifest/ontology.ttl#url",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
};
