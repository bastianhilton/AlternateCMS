import { Product_attributeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_attributeOrderByWithRelationAndSearchRelevanceInput";
import { Product_attributeWhereInput } from "../../../inputs/Product_attributeWhereInput";
import { Product_attributeWhereUniqueInput } from "../../../inputs/Product_attributeWhereUniqueInput";
export declare class FindManyProduct_attributeArgs {
    where?: Product_attributeWhereInput | undefined;
    orderBy?: Product_attributeOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Product_attributeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "default_label" | "attribute_code" | "filter_options" | "use_search" | "layered_navigation" | "search_results_layered_navigation" | "position" | "promo_rule_conditions" | "allow_html_tags_storefront" | "visible_catalog_pages_storefront" | "used_product_listing" | "used_sorting_product_listing" | "prod_id" | "attribute_class" | "attribute_value" | "column_options" | "faceted_navigation" | "isPublic" | "meta_description" | "meta_name" | "meta_url" | "product_attribute_set" | "products"> | undefined;
}
