import { GraphQLResolveInfo } from "graphql";
import { AggregateAgreementsArgs } from "./args/AggregateAgreementsArgs";
import { CreateAgreementsArgs } from "./args/CreateAgreementsArgs";
import { CreateManyAgreementsArgs } from "./args/CreateManyAgreementsArgs";
import { DeleteAgreementsArgs } from "./args/DeleteAgreementsArgs";
import { DeleteManyAgreementsArgs } from "./args/DeleteManyAgreementsArgs";
import { FindFirstAgreementsArgs } from "./args/FindFirstAgreementsArgs";
import { FindManyAgreementsArgs } from "./args/FindManyAgreementsArgs";
import { FindUniqueAgreementsArgs } from "./args/FindUniqueAgreementsArgs";
import { GroupByAgreementsArgs } from "./args/GroupByAgreementsArgs";
import { UpdateAgreementsArgs } from "./args/UpdateAgreementsArgs";
import { UpdateManyAgreementsArgs } from "./args/UpdateManyAgreementsArgs";
import { UpsertAgreementsArgs } from "./args/UpsertAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAgreements } from "../../outputs/AggregateAgreements";
import { AgreementsGroupBy } from "../../outputs/AgreementsGroupBy";
export declare class AgreementsCrudResolver {
    findUniqueAgreements(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAgreementsArgs): Promise<Agreements | null>;
    findFirstAgreements(ctx: any, info: GraphQLResolveInfo, args: FindFirstAgreementsArgs): Promise<Agreements | null>;
    findManyAgreements(ctx: any, info: GraphQLResolveInfo, args: FindManyAgreementsArgs): Promise<Agreements[]>;
    createAgreements(ctx: any, info: GraphQLResolveInfo, args: CreateAgreementsArgs): Promise<Agreements>;
    createManyAgreements(ctx: any, info: GraphQLResolveInfo, args: CreateManyAgreementsArgs): Promise<AffectedRowsOutput>;
    deleteAgreements(ctx: any, info: GraphQLResolveInfo, args: DeleteAgreementsArgs): Promise<Agreements | null>;
    updateAgreements(ctx: any, info: GraphQLResolveInfo, args: UpdateAgreementsArgs): Promise<Agreements | null>;
    deleteManyAgreements(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAgreementsArgs): Promise<AffectedRowsOutput>;
    updateManyAgreements(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAgreementsArgs): Promise<AffectedRowsOutput>;
    upsertAgreements(ctx: any, info: GraphQLResolveInfo, args: UpsertAgreementsArgs): Promise<Agreements>;
    aggregateAgreements(ctx: any, info: GraphQLResolveInfo, args: AggregateAgreementsArgs): Promise<AggregateAgreements>;
    groupByAgreements(ctx: any, info: GraphQLResolveInfo, args: GroupByAgreementsArgs): Promise<AgreementsGroupBy[]>;
}