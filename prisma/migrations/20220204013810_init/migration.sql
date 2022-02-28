-- CreateTable
CREATE TABLE "articles" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "categories" TEXT,
    "customers" TEXT,
    "users" TEXT,
    "published" TIMESTAMP(6),

    CONSTRAINT "articles_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "billing_agreements" (
    " id" SERIAL NOT NULL,
    "reference_id" SERIAL NOT NULL,
    "created" TIMESTAMP(6),
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "status" TEXT,
    "updated" TIMESTAMP(6),
    "action" BOOLEAN,

    CONSTRAINT "billing_agreements_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "cart_price_rules" (
    " id" SERIAL NOT NULL,
    "rule" VARCHAR(255),
    "description" VARCHAR(255),
    "active" BOOLEAN,
    "coupon" TEXT,
    "uses_per_customer" TEXT,
    "priority" TEXT,
    "start_date" DATE,
    "end_date" DATE,
    "status" TEXT,
    "website" TEXT,
    "actions_apply" TEXT,
    "actions_discount_amount" DECIMAL,
    "actions_discard_subsequent_rules" BOOLEAN,
    "actions_max_qty_discount_is_applied_to" DECIMAL,
    "actions_discount_qty_step" DECIMAL,
    "actions_apply_shipping_amount" BOOLEAN,

    CONSTRAINT "cart_price_rules_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "catalog_price_rule" (
    " id" SERIAL NOT NULL,
    "rule" VARCHAR(255),
    "description" VARCHAR(255),
    "active" BOOLEAN,
    "customer_groups" TEXT,
    "priority" TEXT,
    "start_date" DATE,
    "end_date" DATE,
    "status" TEXT,
    "website" TEXT,
    "actions_apply" TEXT,
    "actions_discount_amount" DECIMAL,
    "actions_discard_subsequent_rules" BOOLEAN,

    CONSTRAINT "catalog_price_rule_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "categories" (
    " id" SERIAL NOT NULL,
    "thumbnail" TEXT,
    "name" VARCHAR(255) NOT NULL,
    "visibility" TEXT,
    "status" BOOLEAN,
    "websites" TEXT,
    "product" TEXT,
    "country" TEXT,
    "description" VARCHAR,
    "short_description" VARCHAR(255),
    "image" TEXT,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,
    "meta_url" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "cities" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "cities_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "comments" (
    " id" SERIAL NOT NULL,
    "customer_name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "image" TEXT,
    "response" TEXT,
    "published" TIMESTAMP(6),

    CONSTRAINT "comments_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "core_store" (
    " id" SERIAL NOT NULL,
    "key" VARCHAR(255),
    "value" TEXT,
    "type" VARCHAR(255),
    "environment" VARCHAR(255),
    "tag" VARCHAR(255),

    CONSTRAINT "core_store_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "countries" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "countries_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "coupons" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "discount" MONEY,
    "image" TEXT,
    "published" TIMESTAMP(6),
    "expiration" DATE,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "coupons_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "credit_memos" (
    "credit_memo" SERIAL NOT NULL,
    "order_number" SERIAL NOT NULL,
    "created" TIMESTAMP(6),
    "bill_to_name" VARCHAR(255) NOT NULL,
    "status" TEXT,
    "refunded" INTEGER,
    "action" BOOLEAN,

    CONSTRAINT "credit_memos_pkey" PRIMARY KEY ("credit_memo")
);

-- CreateTable
CREATE TABLE "currency_rates" (
    "import_service" TEXT NOT NULL,
    "usd" MONEY,

    CONSTRAINT "currency_rates_pkey" PRIMARY KEY ("import_service")
);

-- CreateTable
CREATE TABLE "currency_symbols" (
    "symbol" TEXT NOT NULL,
    "use_standard" BOOLEAN,

    CONSTRAINT "currency_symbols_pkey" PRIMARY KEY ("symbol")
);

-- CreateTable
CREATE TABLE "customers" (
    " id" SERIAL NOT NULL,
    "thumbnail" TEXT,
    "name_prefix" VARCHAR(255),
    "first_name" VARCHAR(255) NOT NULL,
    "middle_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "customer_group" TEXT,
    "phone" DECIMAL,
    "zipcode" DECIMAL,
    "status" BOOLEAN,
    "websites" TEXT,
    "product" TEXT,
    "country" TEXT,
    "state" TEXT,
    "customer_since" DATE,
    "confirmed_email" BOOLEAN,
    "date_of_birth" DATE,
    "tax_vat_number" DECIMAL,
    "gender" TEXT,
    "description" VARCHAR,
    "short_description" VARCHAR(255),
    "image" TEXT,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,
    "meta_url" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "gift_certificates" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "discount" MONEY,
    "image" TEXT,
    "published" TIMESTAMP(6),
    "special_offers" TEXT,
    "rewards" TEXT,
    "coupons" TEXT,
    "expiration" DATE,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "gift_certificates_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "glossary" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "image" TEXT,
    "published" TIMESTAMP(6),

    CONSTRAINT "glossary_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "invoice" SERIAL NOT NULL,
    "order_number" SERIAL NOT NULL,
    "invoice_date" TIMESTAMP(6),
    "bill_to_name" VARCHAR(255) NOT NULL,
    "billing_address" VARCHAR(255),
    "grand_total_base" INTEGER,
    "grand_total_purchased" INTEGER,
    "status" BOOLEAN,
    "action" BOOLEAN,
    "shipping_address" VARCHAR(255),
    "customer_name" VARCHAR(255),
    "email" VARCHAR(255),
    "customer_group" TEXT,
    "payment_method" TEXT,
    "shipping_information" TEXT,
    "subtotal" INTEGER,
    "shipping_and_handling" INTEGER,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("invoice")
);

-- CreateTable
CREATE TABLE "newsletter_queue" (
    " id" SERIAL NOT NULL,
    "queue_start" DATE,
    "queue_end" DATE,
    "subject" VARCHAR(255),
    "status" BOOLEAN,
    "processed" DATE,
    "recipients" DATE,
    "action" TEXT,

    CONSTRAINT "newsletter_queue_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "newsletter_subscribers" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "type" TEXT,
    "customer_first_name" VARCHAR(255),
    "customer_last_name" VARCHAR(255),
    "store" TEXT,
    "status" BOOLEAN,
    "websites" TEXT,

    CONSTRAINT "newsletter_subscribers_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "orders" (
    " id" SERIAL NOT NULL,
    "purchase_point" INTEGER,
    "purchase_date" TIMESTAMP(6),
    "bill_to_name" VARCHAR(255) NOT NULL,
    "ship_to_name" VARCHAR(255),
    "grand_total_base" INTEGER,
    "grand_total_purchased" INTEGER,
    "status" BOOLEAN,
    "action" BOOLEAN,
    "allocated_sources" TEXT,
    "braintree_transaction_source" TEXT,

    CONSTRAINT "orders_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "pages" (
    " id" SERIAL NOT NULL,
    "enable_page" BOOLEAN,
    "title" VARCHAR(255) NOT NULL,
    "content_title" VARCHAR(255),
    "content" TEXT,
    "url_key" TEXT,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,

    CONSTRAINT "pages_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "polls" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "description" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(6),
    "question" VARCHAR(255),
    "response" VARCHAR(255),
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "polls_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "product_attribute" (
    " id" SERIAL NOT NULL,
    "default_label" TEXT,
    "catalog_input_type_store_owner" TEXT,
    "values_required" BOOLEAN,
    "attribute_code" TEXT,
    "scope" TEXT,
    "default_value" TEXT,
    "unique_value" BOOLEAN,
    "input_validation_store_owner" TEXT,
    "add_column_options" BOOLEAN,
    "filter_options" BOOLEAN,
    "use_search" BOOLEAN,
    "comparable_storefront" BOOLEAN,
    "layered_navigation" BOOLEAN,
    "search_results_layered_navigation" BOOLEAN,
    "position" TEXT,
    "promo_rule_conditions" BOOLEAN,
    "allow_html_tags_storefront" BOOLEAN,
    "visible_catalog_pages_storefront" BOOLEAN,
    "used_product_listing" BOOLEAN,
    "used_sorting_product_listing" BOOLEAN,

    CONSTRAINT "product_attribute_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "product_attribute_set" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "based_on" TEXT,

    CONSTRAINT "product_attribute_set_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "products" (
    " id" SERIAL NOT NULL,
    "sku" SERIAL NOT NULL,
    "thumbnail" TEXT,
    "name" VARCHAR(255) NOT NULL,
    "type" TEXT,
    "attribute_set" TEXT,
    "price" MONEY,
    "quantity_per_source" TEXT,
    "salable_quantity" TEXT,
    "visibility" TEXT,
    "status" BOOLEAN,
    "websites" TEXT,
    "product" TEXT,
    "tax_class" TEXT,
    "stock_status" TEXT,
    "weight" INTEGER,
    "categories" TEXT,
    "new_from" DATE,
    "country" TEXT,
    "size" INTEGER,
    "format" TEXT,
    "quantity_size" INTEGER,
    "description" VARCHAR,
    "short_description" VARCHAR(255),
    "image" TEXT,
    "meta_title" TEXT,
    "meta_keywords" TEXT,
    "meta_description" TEXT,
    "meta_url" TEXT,
    "file" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "quotes" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "image" TEXT,
    "published" TIMESTAMP(6),
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "quotes_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "rating" (
    " id" SERIAL NOT NULL,
    "default_value" TEXT,
    "default_store_view" TEXT,
    "rating_visibility" TEXT,
    "active" BOOLEAN,
    "sort_order" DECIMAL,

    CONSTRAINT "rating_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "reports" (
    " id" SERIAL NOT NULL,
    "customer" TEXT,
    "email" TEXT,
    "products" TEXT,
    "quantity" DECIMAL,
    "subtotal" MONEY,
    "applied_coupon" TEXT,
    "created" DATE,
    "updated" DATE,
    "ip_address" TEXT,

    CONSTRAINT "reports_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "reviews" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "sku" SERIAL NOT NULL,
    "price" DECIMAL,
    "quantity" DECIMAL,
    "status" BOOLEAN,
    "websites" TEXT,

    CONSTRAINT "reviews_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "reward_points" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "discount" MONEY,
    "image" TEXT,
    "published" TIMESTAMP(6),
    "coupons" TEXT,
    "expiration" DATE,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "reward_points_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "role" (
    " id" SERIAL NOT NULL,
    "role_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "shipments" (
    "shipment" SERIAL NOT NULL,
    "order_number" SERIAL NOT NULL,
    "ship_date" TIMESTAMP(6),
    "ship_to_name" VARCHAR(255) NOT NULL,
    "order_date" TIMESTAMP(6),
    "total_quantity" INTEGER,
    "action" BOOLEAN,

    CONSTRAINT "shipments_pkey" PRIMARY KEY ("shipment")
);

-- CreateTable
CREATE TABLE "shops" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "website" VARCHAR(255),
    "products" TEXT,
    "articles" TEXT,
    "customers" TEXT,
    "comments" TEXT,
    "coupons" TEXT,
    "categories" TEXT,
    "polls" TEXT,
    "quotes" TEXT,
    "reviews" TEXT,
    "gift_certificates" TEXT,
    "rating" TEXT,
    "tags" TEXT,
    "users" TEXT,
    "invoices" TEXT,
    "reports" TEXT,
    "reward_points" TEXT,
    "special_discounts" TEXT,
    "statistics" TEXT,
    "stocks" TEXT,

    CONSTRAINT "shops_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "source" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" SERIAL NOT NULL,
    "enabled" BOOLEAN,
    "description" VARCHAR(255),
    "latitude" TEXT,
    "longitude" TEXT,
    "pickup_location" BOOLEAN,
    "contact_name" VARCHAR(255),
    "email" VARCHAR(255),
    "phone" DECIMAL,
    "fax" DECIMAL,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "street" TEXT,
    "postcode" DECIMAL,

    CONSTRAINT "source_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "special_discounts" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "discount" MONEY,
    "image" TEXT,
    "published" TIMESTAMP(6),
    "rewards" TEXT,
    "coupons" TEXT,
    "expiration" DATE,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "special_discounts_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "states" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "states_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "statistics" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "description" TEXT,
    "image" TEXT,
    "published" TIMESTAMP(6),
    "special_offers" TEXT,
    "reports" TEXT,
    "rewards" TEXT,
    "coupons" TEXT,
    "expiration" DATE,
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "statistics_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "stocks" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "enabled" BOOLEAN,
    "description" VARCHAR(255),
    "website" TEXT,
    "sources" TEXT,

    CONSTRAINT "stocks_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "strapi_administrator" (
    " id" SERIAL NOT NULL,
    "firstname" VARCHAR(255),
    "lastname" VARCHAR(255),
    "username" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "resetPasswordToken" VARCHAR(255),
    "registrationToken" VARCHAR(255),
    "isActive" BOOLEAN,
    "blocked" BOOLEAN,

    CONSTRAINT "strapi_administrator_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "strapi_permission" (
    " id" SERIAL NOT NULL,
    "action" VARCHAR(255) NOT NULL,
    "subject" VARCHAR(255),
    "fields" JSONB,
    "conditions" JSONB,
    "role" INTEGER,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "strapi_permission_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "strapi_role" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "strapi_role_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "strapi_users_roles" (
    " id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "role_id" INTEGER,

    CONSTRAINT "strapi_users_roles_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "strapi_webhooks" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "url" TEXT,
    "headers" JSONB,
    "events" JSONB,
    "enabled" BOOLEAN,

    CONSTRAINT "strapi_webhooks_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "tags" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "excerpt" VARCHAR(255),
    "categories" TEXT,
    "articles" TEXT,
    "products" TEXT,
    "customers" TEXT,
    "users" TEXT,

    CONSTRAINT "tags_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "tax_rate" (
    " id" SERIAL NOT NULL,
    "tax_identifier" SERIAL NOT NULL,
    "zip_post_is_range" BOOLEAN,
    "postcode" DECIMAL,
    "state" TEXT,
    "country" TEXT,
    "rate_percent" DECIMAL,
    "default_store_view" TEXT,

    CONSTRAINT "tax_rate_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "tax_rule" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "tax_rate" TEXT,

    CONSTRAINT "tax_rule_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "themes" (
    " id" SERIAL NOT NULL,
    "title" TEXT,
    "parent_theme" TEXT,
    "theme_path" TEXT,
    "action" TEXT,

    CONSTRAINT "themes_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "transactions" (
    " id" SERIAL NOT NULL,
    "order_id" SERIAL NOT NULL,
    "transaction_id" SERIAL NOT NULL,
    "parent_transaction_id" SERIAL NOT NULL,
    "created" TIMESTAMP(6),
    "payment_method" VARCHAR(255) NOT NULL,
    "closed" TEXT,

    CONSTRAINT "transactions_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "upload_file" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "alternativeText" VARCHAR(255),
    "caption" VARCHAR(255),
    "width" INTEGER,
    "height" INTEGER,
    "formats" JSONB,
    "hash" VARCHAR(255) NOT NULL,
    "ext" VARCHAR(255),
    "mime" VARCHAR(255) NOT NULL,
    "size" DECIMAL(10,2) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "previewUrl" VARCHAR(255),
    "provider" VARCHAR(255) NOT NULL,
    "provider_metadata" JSONB,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "upload_file_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "upload_file_morph" (
    " id" SERIAL NOT NULL,
    "upload_file_id" INTEGER,
    "related_id" INTEGER,
    "related_type" TEXT,
    "field" TEXT,
    "order" INTEGER,

    CONSTRAINT "upload_file_morph_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "url_rewrites" (
    " id" SERIAL NOT NULL,
    "request_path" TEXT,
    "description" VARCHAR(255),
    "redirect_type" BOOLEAN,
    "target_path" TEXT,
    "store" TEXT,

    CONSTRAINT "url_rewrites_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "users" (
    " id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" DECIMAL NOT NULL,
    "interface_locale" TEXT,
    "active" BOOLEAN,
    "expiration_date" DATE,
    "type_of_user" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "users-permissions_permission" (
    " id" SERIAL NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "controller" VARCHAR(255) NOT NULL,
    "action" VARCHAR(255) NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "policy" VARCHAR(255),
    "role" INTEGER,
    "created_by" INTEGER,
    "updated_by" INTEGER,

    CONSTRAINT "users-permissions_permission_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "users-permissions_role" (
    " id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "type" VARCHAR(255),
    "created_by" INTEGER,
    "updated_by" INTEGER,

    CONSTRAINT "users-permissions_role_pkey" PRIMARY KEY (" id")
);

-- CreateTable
CREATE TABLE "users-permissions_user" (
    " id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "provider" VARCHAR(255),
    "password" VARCHAR(255),
    "resetPasswordToken" VARCHAR(255),
    "confirmationToken" VARCHAR(255),
    "confirmed" BOOLEAN,
    "blocked" BOOLEAN,
    "role" INTEGER,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users-permissions_user_pkey" PRIMARY KEY (" id")
);

-- CreateIndex
CREATE UNIQUE INDEX "articles_name_key" ON "articles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "categories_unique" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "comments_customer_name_key" ON "comments"("customer_name");

-- CreateIndex
CREATE UNIQUE INDEX "comments_response_key" ON "comments"("response");

-- CreateIndex
CREATE UNIQUE INDEX "coupons_name_key" ON "coupons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "gift_certificates_name_key" ON "gift_certificates"("name");

-- CreateIndex
CREATE UNIQUE INDEX "polls_name_key" ON "polls"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_attribute_set_name_key" ON "product_attribute_set"("name");

-- CreateIndex
CREATE UNIQUE INDEX "quotes_name_key" ON "quotes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "reports_customer_key" ON "reports"("customer");

-- CreateIndex
CREATE UNIQUE INDEX "reports_email_key" ON "reports"("email");

-- CreateIndex
CREATE UNIQUE INDEX "reward_points_name_key" ON "reward_points"("name");

-- CreateIndex
CREATE UNIQUE INDEX "role_role_name_key" ON "role"("role_name");

-- CreateIndex
CREATE UNIQUE INDEX "shops_name_key" ON "shops"("name");

-- CreateIndex
CREATE UNIQUE INDEX "special_discounts_name_key" ON "special_discounts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "statistics_name_key" ON "statistics"("name");

-- CreateIndex
CREATE UNIQUE INDEX "stocks_sources_key" ON "stocks"("sources");

-- CreateIndex
CREATE UNIQUE INDEX "strapi_administrator_email_unique" ON "strapi_administrator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "strapi_role_name_unique" ON "strapi_role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "strapi_role_code_unique" ON "strapi_role"("code");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tax_rate_tax_identifier_key" ON "tax_rate"("tax_identifier");

-- CreateIndex
CREATE UNIQUE INDEX "tax_rule_name_key" ON "tax_rule"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users-permissions_role_type_unique" ON "users-permissions_role"("type");

-- CreateIndex
CREATE UNIQUE INDEX "users-permissions_user_username_unique" ON "users-permissions_user"("username");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "product_foriegn" FOREIGN KEY ("categories") REFERENCES "categories"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;
