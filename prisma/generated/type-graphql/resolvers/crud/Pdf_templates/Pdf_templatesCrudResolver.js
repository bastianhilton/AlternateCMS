"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf_templatesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePdf_templatesArgs_1 = require("./args/AggregatePdf_templatesArgs");
const CreateManyPdf_templatesArgs_1 = require("./args/CreateManyPdf_templatesArgs");
const CreateOnePdf_templatesArgs_1 = require("./args/CreateOnePdf_templatesArgs");
const DeleteManyPdf_templatesArgs_1 = require("./args/DeleteManyPdf_templatesArgs");
const DeleteOnePdf_templatesArgs_1 = require("./args/DeleteOnePdf_templatesArgs");
const FindFirstPdf_templatesArgs_1 = require("./args/FindFirstPdf_templatesArgs");
const FindManyPdf_templatesArgs_1 = require("./args/FindManyPdf_templatesArgs");
const FindUniquePdf_templatesArgs_1 = require("./args/FindUniquePdf_templatesArgs");
const GroupByPdf_templatesArgs_1 = require("./args/GroupByPdf_templatesArgs");
const UpdateManyPdf_templatesArgs_1 = require("./args/UpdateManyPdf_templatesArgs");
const UpdateOnePdf_templatesArgs_1 = require("./args/UpdateOnePdf_templatesArgs");
const UpsertOnePdf_templatesArgs_1 = require("./args/UpsertOnePdf_templatesArgs");
const helpers_1 = require("../../../helpers");
const Pdf_templates_1 = require("../../../models/Pdf_templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePdf_templates_1 = require("../../outputs/AggregatePdf_templates");
const Pdf_templatesGroupBy_1 = require("../../outputs/Pdf_templatesGroupBy");
let Pdf_templatesCrudResolver = class Pdf_templatesCrudResolver {
    async aggregatePdf_templates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyPdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOnePdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOnePdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByPdf_templates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyPdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOnePdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOnePdf_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).pdf_templates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePdf_templates_1.AggregatePdf_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePdf_templatesArgs_1.AggregatePdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "aggregatePdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPdf_templatesArgs_1.CreateManyPdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "createManyPdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pdf_templates_1.Pdf_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePdf_templatesArgs_1.CreateOnePdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "createOnePdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPdf_templatesArgs_1.DeleteManyPdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "deleteManyPdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pdf_templates_1.Pdf_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePdf_templatesArgs_1.DeleteOnePdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "deleteOnePdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pdf_templates_1.Pdf_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPdf_templatesArgs_1.FindFirstPdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "findFirstPdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Pdf_templates_1.Pdf_templates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPdf_templatesArgs_1.FindManyPdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "findManyPdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Pdf_templates_1.Pdf_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePdf_templatesArgs_1.FindUniquePdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "findUniquePdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Pdf_templatesGroupBy_1.Pdf_templatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPdf_templatesArgs_1.GroupByPdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "groupByPdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPdf_templatesArgs_1.UpdateManyPdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "updateManyPdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pdf_templates_1.Pdf_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePdf_templatesArgs_1.UpdateOnePdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "updateOnePdf_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Pdf_templates_1.Pdf_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePdf_templatesArgs_1.UpsertOnePdf_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Pdf_templatesCrudResolver.prototype, "upsertOnePdf_templates", null);
Pdf_templatesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Pdf_templates_1.Pdf_templates)
], Pdf_templatesCrudResolver);
exports.Pdf_templatesCrudResolver = Pdf_templatesCrudResolver;
