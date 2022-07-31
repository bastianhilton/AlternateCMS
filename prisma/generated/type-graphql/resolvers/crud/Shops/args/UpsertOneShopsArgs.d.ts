import { ShopsCreateInput } from "../../../inputs/ShopsCreateInput";
import { ShopsUpdateInput } from "../../../inputs/ShopsUpdateInput";
import { ShopsWhereUniqueInput } from "../../../inputs/ShopsWhereUniqueInput";
export declare class UpsertOneShopsArgs {
    where: ShopsWhereUniqueInput;
    create: ShopsCreateInput;
    update: ShopsUpdateInput;
}
