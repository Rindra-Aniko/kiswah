import { db } from './index';
import { schedules } from './schema';
import { sql } from 'drizzle-orm';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function sync() {
  console.log('Synchronizing schedules table...');
  
  try {
    // Create table if it doesn't exist
    await db.run(sql`
      CREATE TABLE IF NOT EXISTS \`schedules\` (
        \`id\` integer PRIMARY KEY AUTOINCREMENT,
        \`month_year\` text NOT NULL,
        \`package_name\` text NOT NULL,
        \`hotel1\` text NOT NULL,
        \`hotel1_stars\` integer NOT NULL,
        \`hotel2\` text NOT NULL,
        \`hotel2_stars\` integer NOT NULL,
        \`airline\` text NOT NULL,
        \`airline_logo\` text,
        \`seats_available\` text NOT NULL,
        \`created_at\` text DEFAULT (CURRENT_TIMESTAMP),
        \`updated_at\` text DEFAULT (CURRENT_TIMESTAMP)
      );
    `);
    console.log('Table "schedules" checked/created.');

    // Seed data
    const initialPackages = [
      { monthYear: 'Juni 2026', packageName: 'Paket Umrah Ekonomi-Reguler-Arbain', hotel1: 'Hotel Elf Diamon', hotel1Stars: 4, hotel2: 'Nada As Assalam', hotel2Stars: 3, airline: 'AIR ASIA', airlineLogo: '/logos/airasia.png', seatsAvailable: 'FULL' },
      { monthYear: 'Juli 2026', packageName: 'Paket Umrah Ekonomi-Reguler-Arbain', hotel1: 'Hotel Elf Diamon', hotel1Stars: 4, hotel2: 'Nada As Assalam', hotel2Stars: 3, airline: 'AIR ASIA', airlineLogo: '/logos/airasia.png', seatsAvailable: 'FULL' },
      { monthYear: 'Agus 2026', packageName: 'Paket Umrah Ekonomi-Reguler-Arbain', hotel1: 'Hotel Elf Diamon', hotel1Stars: 4, hotel2: 'Nada As Assalam', hotel2Stars: 3, airline: 'AIR ASIA', airlineLogo: '/logos/airasia.png', seatsAvailable: '50' },
      { monthYear: 'Sep 2026', packageName: 'Paket Umrah Ekonomi-Reguler-Arbain', hotel1: 'Hotel Elf Diamon', hotel1Stars: 4, hotel2: 'Nada As Assalam', hotel2Stars: 3, airline: 'AIR ASIA', airlineLogo: '/logos/airasia.png', seatsAvailable: '50' },
      { monthYear: 'Okt 2026', packageName: 'Paket Umrah Ekonomi-Reguler-Arbain', hotel1: 'Hotel Elf Diamon', hotel1Stars: 4, hotel2: 'Nada As Assalam', hotel2Stars: 3, airline: 'AIR ASIA', airlineLogo: '/logos/airasia.png', seatsAvailable: '50' },
      { monthYear: 'Nov 2026', packageName: 'Paket Umrah Ekonomi-Reguler-Arbain', hotel1: 'Hotel Elf Diamon', hotel1Stars: 4, hotel2: 'Nada As Assalam', hotel2Stars: 3, airline: 'AIR ASIA', airlineLogo: '/logos/airasia.png', seatsAvailable: '50' },
      { monthYear: 'DES 2026', packageName: 'Paket Umrah Ekonomi-Reguler-Arbain', hotel1: 'Hotel Elf Diamon', hotel1Stars: 4, hotel2: 'Nada As Assalam', hotel2Stars: 3, airline: 'AIR ASIA', airlineLogo: '/logos/airasia.png', seatsAvailable: '50' },
      { monthYear: 'JAN 2027', packageName: 'Paket Umrah Ekonomi-Reguler-Arbain', hotel1: 'Hotel Elf Diamon', hotel1Stars: 4, hotel2: 'Nada As Assalam', hotel2Stars: 3, airline: 'AIR ASIA', airlineLogo: '/logos/airasia.png', seatsAvailable: '50' },
    ];

    console.log('Seeding initial packages...');
    for (const pkg of initialPackages) {
      await db.insert(schedules).values(pkg);
    }
    console.log('Seeding completed successfully!');
    
  } catch (error) {
    console.error('Error during synchronization:', error);
  }
}

sync();
