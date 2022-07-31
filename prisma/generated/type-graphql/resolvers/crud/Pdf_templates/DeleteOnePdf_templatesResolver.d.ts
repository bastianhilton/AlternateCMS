import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePdf_templatesArgs } from "./args/DeleteOnePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class DeleteOnePdf_templatesResolver {
    deleteOnePdf_templates(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePdf_templatesArgs): Promise<Pdf_templates | null>;
}
