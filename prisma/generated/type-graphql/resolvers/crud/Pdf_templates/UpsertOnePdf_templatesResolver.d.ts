import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePdf_templatesArgs } from "./args/UpsertOnePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class UpsertOnePdf_templatesResolver {
    upsertOnePdf_templates(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePdf_templatesArgs): Promise<Pdf_templates>;
}
