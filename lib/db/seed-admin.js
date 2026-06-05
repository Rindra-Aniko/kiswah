const { createClient } = require('@libsql/client');
const { hash } = require('bcrypt-ts');
require('dotenv').config({ path: '.env.local' });

async function seed() {
  const url = process.env.DATABASE_URL;
  const authToken = process.env.DATABASE_AUTH_TOKEN;

  if (!url) {
    console.error('DATABASE_URL is not set in .env.local');
    process.exit(1);
  }

  console.log('Connecting to Turso and seeding admin user...');
  const client = createClient({ url, authToken });

  try {
    const hashedPassword = await hash('kiswah123admin', 10);

    // Drizzle-orm's table name for users is 'users'
    await client.execute({
      sql: `INSERT INTO users (name, email, password, role) 
            VALUES (?, ?, ?, ?) 
            ON CONFLICT(email) DO NOTHING`,
      args: ['admin', 'admin@kiswah.id', hashedPassword, 'admin']
    });

    console.log("Admin user 'admin@kiswah.id' seeded successfully!");
  } catch (error) {
    console.error('Error seeding admin user:', error);
  } finally {
    client.close();
  }
}

seed();
