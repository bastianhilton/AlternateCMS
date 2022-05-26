"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_rates = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../scalars");
let Currency_rates = class Currency_rates {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_rates.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Currency_rates.prototype, "usd", void 0);
Currency_rates = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_rates", {
        isAbstract: true
    })
], Currency_rates);
exports.Currency_rates = Currency_rates;
