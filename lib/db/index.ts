import 'server-only';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import * as schema from './schema';

const dbUrl = process.env.DATABASE_URL || (process.env.NEXT_RUNTIME === 'edge' ? "libsql://dummy.turso.io" : "file:local.db");

const client = createClient({
  url: dbUrl,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });
