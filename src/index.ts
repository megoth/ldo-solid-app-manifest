import {manifestContext} from "@/ldo/manifest.context";
import {manifestSchema} from "@/ldo/manifest.schema";
import {DocumentShapeType, ManifestShapeType, SupportShapeType} from "@/ldo/manifest.shapeTypes";

export type {Document, Manifest, Support} from "@/ldo/manifest.typings";

export default {
    manifestContext,
    manifestSchema,
    DocumentShapeType,
    ManifestShapeType,
    SupportShapeType
};