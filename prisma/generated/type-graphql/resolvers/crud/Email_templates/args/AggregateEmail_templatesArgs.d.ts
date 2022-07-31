import { Email_templatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Email_templatesOrderByWithRelationAndSearchRelevanceInput";
import { Email_templatesWhereInput } from "../../../inputs/Email_templatesWhereInput";
import { Email_templatesWhereUniqueInput } from "../../../inputs/Email_templatesWhereUniqueInput";
export declare class AggregateEmail_templatesArgs {
    where?: Email_templatesWhereInput | undefined;
    orderBy?: Email_templatesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Email_templatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
