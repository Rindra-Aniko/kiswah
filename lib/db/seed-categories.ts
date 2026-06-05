require('dotenv').config({ path: '.env.local' });
const { db } = require('./index');
const { categories } = require('./schema');

async function seed() {
  const initialCategories = [
    { name: 'Umroh', slug: 'umroh' },
    { name: 'Haji', slug: 'haji' },
    { name: 'Wisata Religi', slug: 'wisata-religi' },
    { name: 'Tips & Trik', slug: 'tips-trik' },
    { name: 'Berita', slug: 'berita' },
  ];
  
  try {
    for (const category of initialCategories) {
      await db.insert(categories).values(category).onConflictDoNothing();
    }
    console.log('Categories seeded successfully');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
}

seed();
