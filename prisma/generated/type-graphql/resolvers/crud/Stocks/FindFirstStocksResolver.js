"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStocksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstStocksArgs_1 = require("./args/FindFirstStocksArgs");
const Stocks_1 = require("../../../models/Stocks");
const helpers_1 = require("../../../helpers");
let FindFirstStocksResolver = class FindFirstStocksResolver {
    async findFirstStocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stocks.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stocks_1.Stocks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStocksArgs_1.FindFirstStocksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstStocksResolver.prototype, "findFirstStocks", null);
FindFirstStocksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stocks_1.Stocks)
], FindFirstStocksResolver);
exports.FindFirstStocksResolver = FindFirstStocksResolver;
