import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const isBuild = process.env.npm_lifecycle_event === 'build';

const queryClient = isBuild ? null as any : postgres({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DB_NAME,
});
export const db = isBuild ? null as any : drizzle(queryClient, { schema });
