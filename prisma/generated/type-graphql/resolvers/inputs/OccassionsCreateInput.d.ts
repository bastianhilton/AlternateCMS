export declare class OccassionsCreateInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    code?: string | undefined;
    name?: string | undefined;
    category?: string | undefined;
    tags?: string | undefined;
    description?: string | undefined;
    products?: bigint | undefined;
    wishlists?: bigint | undefined;
    products_occassionsToproducts?: string | undefined;
    wishlists_occassionsTowishlists?: string | undefined;
}
