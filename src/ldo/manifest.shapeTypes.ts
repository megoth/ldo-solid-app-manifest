import { ShapeType } from "ldo";
import { manifestSchema } from "./manifest.schema";
import { manifestContext } from "./manifest.context";
import { Document, Manifest, Support } from "./manifest.typings";

/**
 * =============================================================================
 * LDO ShapeTypes manifest
 * =============================================================================
 */

/**
 * Document ShapeType
 */
export const DocumentShapeType: ShapeType<Document> = {
  schema: manifestSchema,
  shape: "https://icanhasweb.net/shapes/manifest.ttl#Document",
  context: manifestContext,
};

/**
 * Manifest ShapeType
 */
export const ManifestShapeType: ShapeType<Manifest> = {
  schema: manifestSchema,
  shape: "https://icanhasweb.net/shapes/manifest.ttl#Manifest",
  context: manifestContext,
};

/**
 * Support ShapeType
 */
export const SupportShapeType: ShapeType<Support> = {
  schema: manifestSchema,
  shape: "https://icanhasweb.net/shapes/manifest.ttl#Support",
  context: manifestContext,
};
