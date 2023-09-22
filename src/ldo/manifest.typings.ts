import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for manifest
 * =============================================================================
 */

/**
 * Document Type
 */
export interface Document {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Document";
  };
  list?: Manifest[];
}

/**
 * Manifest Type
 */
export interface Manifest {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Manifest";
  };
  appName: string;
  appDescription: string;
  appUrl: string;
  supports?: Support[];
}

/**
 * Support Type
 */
export interface Support {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Support";
  };
  type2: string;
  url: string;
}
