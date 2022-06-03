import { GraphQLResolveInfo } from "graphql";
import { AggregateReviewsArgs } from "./args/AggregateReviewsArgs";
import { CreateManyReviewsArgs } from "./args/CreateManyReviewsArgs";
import { CreateReviewsArgs } from "./args/CreateReviewsArgs";
import { DeleteManyReviewsArgs } from "./args/DeleteManyReviewsArgs";
import { DeleteReviewsArgs } from "./args/DeleteReviewsArgs";
import { FindFirstReviewsArgs } from "./args/FindFirstReviewsArgs";
import { FindManyReviewsArgs } from "./args/FindManyReviewsArgs";
import { FindUniqueReviewsArgs } from "./args/FindUniqueReviewsArgs";
import { GroupByReviewsArgs } from "./args/GroupByReviewsArgs";
import { UpdateManyReviewsArgs } from "./args/UpdateManyReviewsArgs";
import { UpdateReviewsArgs } from "./args/UpdateReviewsArgs";
import { UpsertReviewsArgs } from "./args/UpsertReviewsArgs";
import { Reviews } from "../../../models/Reviews";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReviews } from "../../outputs/AggregateReviews";
import { ReviewsGroupBy } from "../../outputs/ReviewsGroupBy";
export declare class ReviewsCrudResolver {
    findUniqueReviews(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReviewsArgs): Promise<Reviews | null>;
    findFirstReviews(ctx: any, info: GraphQLResolveInfo, args: FindFirstReviewsArgs): Promise<Reviews | null>;
    findManyReviews(ctx: any, info: GraphQLResolveInfo, args: FindManyReviewsArgs): Promise<Reviews[]>;
    createReviews(ctx: any, info: GraphQLResolveInfo, args: CreateReviewsArgs): Promise<Reviews>;
    createManyReviews(ctx: any, info: GraphQLResolveInfo, args: CreateManyReviewsArgs): Promise<AffectedRowsOutput>;
    deleteReviews(ctx: any, info: GraphQLResolveInfo, args: DeleteReviewsArgs): Promise<Reviews | null>;
    updateReviews(ctx: any, info: GraphQLResolveInfo, args: UpdateReviewsArgs): Promise<Reviews | null>;
    deleteManyReviews(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReviewsArgs): Promise<AffectedRowsOutput>;
    updateManyReviews(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReviewsArgs): Promise<AffectedRowsOutput>;
    upsertReviews(ctx: any, info: GraphQLResolveInfo, args: UpsertReviewsArgs): Promise<Reviews>;
    aggregateReviews(ctx: any, info: GraphQLResolveInfo, args: AggregateReviewsArgs): Promise<AggregateReviews>;
    groupByReviews(ctx: any, info: GraphQLResolveInfo, args: GroupByReviewsArgs): Promise<ReviewsGroupBy[]>;
}