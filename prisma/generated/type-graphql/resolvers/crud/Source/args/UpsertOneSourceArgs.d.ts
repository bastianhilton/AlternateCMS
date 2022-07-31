import { SourceCreateInput } from "../../../inputs/SourceCreateInput";
import { SourceUpdateInput } from "../../../inputs/SourceUpdateInput";
import { SourceWhereUniqueInput } from "../../../inputs/SourceWhereUniqueInput";
export declare class UpsertOneSourceArgs {
    where: SourceWhereUniqueInput;
    create: SourceCreateInput;
    update: SourceUpdateInput;
}
