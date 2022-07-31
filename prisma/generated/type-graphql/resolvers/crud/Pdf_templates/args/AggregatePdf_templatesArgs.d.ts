import { Pdf_templatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Pdf_templatesOrderByWithRelationAndSearchRelevanceInput";
import { Pdf_templatesWhereInput } from "../../../inputs/Pdf_templatesWhereInput";
import { Pdf_templatesWhereUniqueInput } from "../../../inputs/Pdf_templatesWhereUniqueInput";
export declare class AggregatePdf_templatesArgs {
    where?: Pdf_templatesWhereInput | undefined;
    orderBy?: Pdf_templatesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Pdf_templatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
