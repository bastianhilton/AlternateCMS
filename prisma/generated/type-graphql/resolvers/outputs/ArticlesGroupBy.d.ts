import { ArticlesAvgAggregate } from "../outputs/ArticlesAvgAggregate";
import { ArticlesCountAggregate } from "../outputs/ArticlesCountAggregate";
import { ArticlesMaxAggregate } from "../outputs/ArticlesMaxAggregate";
import { ArticlesMinAggregate } from "../outputs/ArticlesMinAggregate";
import { ArticlesSumAggregate } from "../outputs/ArticlesSumAggregate";
export declare class ArticlesGroupBy {
    id: number;
    name: string;
    excerpt: string;
    content: string | null;
    image: string | null;
    categories: string | null;
    customers: string | null;
    users: string | null;
    published: string | null;
    cust_id: number;
    isPublic: string | null;
    meta_description: string | null;
    meta_name: string | null;
    meta_url: string | null;
    tags: string | null;
    _count: ArticlesCountAggregate | null;
    _avg: ArticlesAvgAggregate | null;
    _sum: ArticlesSumAggregate | null;
    _min: ArticlesMinAggregate | null;
    _max: ArticlesMaxAggregate | null;
}
