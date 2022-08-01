import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createServer } from '@graphql-yoga/node'

import * as path from "path";
import { PrismaClient } from "@prisma/client";
import { useParserCache } from '@envelop/parser-cache'
import { useValidationCache } from '@envelop/validation-cache'

import { resolvers } from "../prisma/generated/type-graphql/";

interface Context {
  prisma: PrismaClient;
}

async function main() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    validate: false,
  });

  const prisma = new PrismaClient();
  await prisma.$connect();

  const server = createServer({
    schema,
    cors: {
      origin: 'http://localhost:4000',
      credentials: true,
      allowedHeaders: ['X-Custom-Header'],
      methods: ['POST'],
    },
    context: (): Context => ({ prisma }),
    plugins: [
      useParserCache({}),
      useValidationCache({})
    ]
  });

  // Start the server and explore http://localhost:4000/graphql
  server.start();
  console.log(`GraphQL is listening on ${origin}!`);
}

main().catch(console.error);