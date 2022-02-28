/*
  Warnings:

  - You are about to drop the `strapi_administrator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `strapi_permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `strapi_role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `strapi_users_roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `strapi_webhooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users-permissions_permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users-permissions_role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users-permissions_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "product_foriegn";

-- DropTable
DROP TABLE "strapi_administrator";

-- DropTable
DROP TABLE "strapi_permission";

-- DropTable
DROP TABLE "strapi_role";

-- DropTable
DROP TABLE "strapi_users_roles";

-- DropTable
DROP TABLE "strapi_webhooks";

-- DropTable
DROP TABLE "users-permissions_permission";

-- DropTable
DROP TABLE "users-permissions_role";

-- DropTable
DROP TABLE "users-permissions_user";

-- RenameIndex
ALTER INDEX "articles_name_key" RENAME TO "articles.name_unique";

-- RenameIndex
ALTER INDEX "categories_unique" RENAME TO "categories.name_unique";

-- RenameIndex
ALTER INDEX "comments_customer_name_key" RENAME TO "comments.customer_name_unique";

-- RenameIndex
ALTER INDEX "comments_response_key" RENAME TO "comments.response_unique";

-- RenameIndex
ALTER INDEX "coupons_name_key" RENAME TO "coupons.name_unique";

-- RenameIndex
ALTER INDEX "gift_certificates_name_key" RENAME TO "gift_certificates.name_unique";

-- RenameIndex
ALTER INDEX "polls_name_key" RENAME TO "polls.name_unique";

-- RenameIndex
ALTER INDEX "product_attribute_set_name_key" RENAME TO "product_attribute_set.name_unique";

-- RenameIndex
ALTER INDEX "quotes_name_key" RENAME TO "quotes.name_unique";

-- RenameIndex
ALTER INDEX "reports_customer_key" RENAME TO "reports.customer_unique";

-- RenameIndex
ALTER INDEX "reports_email_key" RENAME TO "reports.email_unique";

-- RenameIndex
ALTER INDEX "reward_points_name_key" RENAME TO "reward_points.name_unique";

-- RenameIndex
ALTER INDEX "role_role_name_key" RENAME TO "role.role_name_unique";

-- RenameIndex
ALTER INDEX "shops_name_key" RENAME TO "shops.name_unique";

-- RenameIndex
ALTER INDEX "special_discounts_name_key" RENAME TO "special_discounts.name_unique";

-- RenameIndex
ALTER INDEX "statistics_name_key" RENAME TO "statistics.name_unique";

-- RenameIndex
ALTER INDEX "stocks_sources_key" RENAME TO "stocks.sources_unique";

-- RenameIndex
ALTER INDEX "tags_name_key" RENAME TO "tags.name_unique";

-- RenameIndex
ALTER INDEX "tax_rate_tax_identifier_key" RENAME TO "tax_rate.tax_identifier_unique";

-- RenameIndex
ALTER INDEX "tax_rule_name_key" RENAME TO "tax_rule.name_unique";

-- RenameIndex
ALTER INDEX "users_email_key" RENAME TO "users.email_unique";

-- RenameIndex
ALTER INDEX "users_username_key" RENAME TO "users.username_unique";
