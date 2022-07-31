import { GraphQLResolveInfo } from "graphql";
import { UpdateOnePdf_templatesArgs } from "./args/UpdateOnePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class UpdateOnePdf_templatesResolver {
    updateOnePdf_templates(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePdf_templatesArgs): Promise<Pdf_templates | null>;
}
