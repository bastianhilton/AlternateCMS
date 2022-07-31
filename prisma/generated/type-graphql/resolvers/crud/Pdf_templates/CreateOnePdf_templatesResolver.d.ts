import { GraphQLResolveInfo } from "graphql";
import { CreateOnePdf_templatesArgs } from "./args/CreateOnePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class CreateOnePdf_templatesResolver {
    createOnePdf_templates(ctx: any, info: GraphQLResolveInfo, args: CreateOnePdf_templatesArgs): Promise<Pdf_templates>;
}
