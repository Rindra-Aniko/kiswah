# Kiswah.id - Portal Tour & Travel (Umrah & Haji Khusus)

Website portal resmi **Kiswah.id** yang menyediakan informasi paket perjalanan Umrah, Haji Khusus, Tour Muslim, artikel keagamaan, serta sistem kelola (Dashboard Admin) untuk mengelola jadwal keberangkatan, artikel, dan akses operator.

Situs ini dibangun menggunakan **Next.js (App Router)** dengan optimasi performa modern (SSR/ISR), desain responsif Tailwind CSS v4, dan database berbasis cloud **Turso**.

---

## 🚀 Teknologi Utama (Tech Stack)

Aplikasi ini dibangun menggunakan arsitektur modern berikut:
1. **Framework Utama**: [Next.js 16 (App Router)](https://nextjs.org/) dengan TypeScript.
2. **Styling & Desain System**: [Tailwind CSS v4](https://tailwindcss.com/) dengan dukungan CSS variable native dan `@theme`.
3. **Database**: [Turso Database](https://turso.tech/) (LibSQL/SQLite cloud yang didistribusikan secara global).
4. **ORM (Object-Relational Mapping)**: [Drizzle ORM](https://orm.drizzle.team/) untuk query tipe aman (type-safe) dan migrasi database.
5. **Autentikasi**: Sesi berbasis Cookie JWT enkripsi kustom (menggunakan library `jose`) dan hashing password `bcryptjs`.
6. **Ikon**: [React Icons](https://react-icons.github.io/react-icons/) (Heroicons, Ionicons, Feather Icons).
7. **Rich Text Editor**: [Tiptap Editor](https://tiptap.dev/) untuk input konten artikel di panel admin.

---

## 📁 Struktur Proyek (Directory Structure)

Memahami struktur direktori untuk membantu pengembangan:

```text
├── app/                      # Next.js App Router (Semua halaman & layout)
│   ├── admin/                # Laman Login & Halaman Dashboard Admin
│   │   ├── dashboard/        # Dashboard kelola artikel, jadwal, dan user
│   │   └── page.tsx          # Laman login admin ('use client')
│   ├── artikel/              # Laman artikel publik (list artikel & detail dinamis [slug])
│   ├── jadwal/               # Laman jadwal keberangkatan publik & status kuota
│   ├── layanan/              # Laman informasi paket Umrah, Haji, & Tour
│   ├── tentang-kami/         # Laman profil perusahaan, tim, & kontak
│   ├── components/           # Komponen UI reusable (Navbar, Footer, Editor, WA Button)
│   ├── globals.css           # File CSS utama proyek (Tailwind v4 directive & theme)
│   └── layout.tsx            # Layout utama proyek (pemuatan font Google & metadata SEO)
├── lib/                      # Utilitas backend & logika server
│   ├── actions/              # Next.js Server Actions (Mutasi data aman)
│   │   ├── articles.ts       # Manajemen artikel (tambah, edit, hapus)
│   │   ├── auth.ts           # Login & logout admin/operator
│   │   ├── schedules.ts      # Manajemen jadwal keberangkatan & status kuota
│   │   └── users.ts          # Manajemen akun user pengelola
│   ├── db/                   # Koneksi Drizzle & skema tabel
│   │   ├── index.ts          # Inisialisasi client database Turso (server-only)
│   │   ├── schema.ts         # Skema tabel database (users, articles, categories, schedules)
│   │   ├── seed-admin.js     # Script seeding admin awal menggunakan LibSQL murni
│   │   └── seed-categories.ts# Script seeding kategori artikel bawaan
│   └── auth.ts               # Utilitas enkripsi/dekripsi JWT & proteksi sesi (server-only)
├── drizzle.config.ts         # Konfigurasi Drizzle Kit untuk sync schema
├── next.config.ts            # Konfigurasi Next.js (Allowed images pattern & Bundle Analyzer)
├── package.json              # Daftar dependency proyek & scripts
└── tsconfig.json             # Konfigurasi TypeScript
```

---

## 🛠️ Langkah Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah berikut untuk setup environment pengembangan lokal Anda:

### 1. Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal:
* [Node.js](https://nodejs.org/) (Versi rekomendasi: `>= 20.x` atau LTS)
* npm (Bawaan Node.js)

### 2. Kloning Repositori
Kloning repositori proyek dari GitHub ke komputer Anda:
```bash
git clone https://github.com/username/kiswah.id.git
cd kiswah.id
```

### 3. Instalasi Dependency
Instal semua modul Node.js yang tertera pada `package.json`:
```bash
npm install
```

### 4. Konfigurasi Environment Variables
Salin berkas contoh `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Buka file `.env.local` baru tersebut dan isi dengan kredensial Turso Database Anda:
```env
DATABASE_URL="libsql://nama-database-anda.turso.io"
DATABASE_AUTH_TOKEN="token-autentikasi-turso-anda"
JWT_SECRET="isi-dengan-string-acak-untuk-keamanan-jwt"
```

### 5. Sinkronisasi Skema Database (Drizzle Push)
Push skema Drizzle yang didefinisikan di `lib/db/schema.ts` ke database Turso Anda:
```bash
npm run db:push
```

### 6. Seeding Data Awal
Jalankan skrip-skrip seeding berikut secara berurutan untuk mengisi data awal database Anda:

* **Seeding Kategori Artikel**:
  ```bash
  npx dotenv-cli -e .env.local tsx lib/db/seed-categories.ts
  ```
* **Seeding Jadwal Awal**:
  ```bash
  npx dotenv-cli -e .env.local tsx lib/db/sync-schedules.ts
  ```
* **Seeding Akun Administrator Utama**:
  ```bash
  node lib/db/seed-admin.js
  ```
  *(Akun admin default: `admin@kiswah.id` | kata sandi: `kiswah123admin`)*

### 7. Jalankan Server Development
Jalankan aplikasi di mode lokal development:
```bash
npm run dev
```
Buka browser dan buka [http://localhost:3000](http://localhost:3000). Untuk masuk ke dashboard, navigasikan ke [http://localhost:3000/admin](http://localhost:3000/admin).

---

## 🎯 Panduan Perintah Developer (Scripts)

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan Next.js di mode pengembangan lokal. |
| `npm run build` | Melakukan kompilasi proyek untuk produksi (Next.js & TypeScript). |
| `npm run start` | Menjalankan aplikasi yang sudah di-build di server produksi. |
| `npm run db:push` | Menyinkronkan struktur skema file `schema.ts` langsung ke database remote. |
| `npm run db:studio` | Membuka antarmuka visual Drizzle Studio di browser untuk melihat isi tabel database. |
| `$env:ANALYZE="true"; npm run build --webpack` | Menganalisis ukuran bundle JavaScript (Webpack) aplikasi. |

---

## 💡 Praktik Terbaik Pengembangan (Best Practices)

Untuk memelihara performa dan keamanan website ini, berikut adalah praktik-praktik arsitektur penting yang wajib diikuti:

### 1. Proteksi Kode Sisi Server (`server-only`)
Untuk mencegah kebocoran logika backend (token Turso, library enkripsi jose, hashing password bcrypt) ke bundel browser klien, kita menggunakan library `server-only`. 
* **Aturan**: File [`lib/db/index.ts`](file:///d:/Kiswah/kiswah.id/lib/db/index.ts) dan [`lib/auth.ts`](file:///d:/Kiswah/kiswah.id/lib/auth.ts) ditandai dengan `import 'server-only'` di baris teratas. Jangan pernah mengimpor fungsi dari file ini langsung ke dalam komponen bertipe `'use client'` (Client Components).

### 2. Impor Dinamis Pustaka Berat (Code Splitting)
Pustaka Rich Text Editor **Tiptap** dan dependensinya (ProseMirror) memiliki ukuran file yang besar (~200KB).
* **Aturan**: Komponen editor dibungkus di dalam [`app/components/Editor.Component.tsx`](file:///d:/Kiswah/kiswah.id/app/components/Editor.Component.tsx). Pada form pembuatan/pengeditan artikel, impor komponen ini secara dinamis dengan opsi SSR dimatikan (`ssr: false`) agar tidak memperlambat First Load JS halaman publik lainnya:
  ```typescript
  import dynamic from 'next/dynamic';
  const TiptapEditor = dynamic(() => import('@/app/components/Editor.Component'), { ssr: false });
  ```

### 3. Revalidasi Halaman Statis (Incremental Static Regeneration - ISR)
Halaman publik seperti daftar jadwal keberangkatan (`/jadwal`) dan daftar artikel (`/artikel`) di-render secara statis (SSG) demi kecepatan muat instan.
* **Aturan**: Setiap kali Server Action melakukan mutasi data (tambah/edit/hapus jadwal atau artikel), panggil fungsi `revalidatePath` untuk memperbarui cache halaman statis tersebut:
  ```typescript
  revalidatePath('/jadwal');
  revalidatePath('/admin/dashboard/schedules');
  ```

### 4. Penanganan Hydration Warning untuk Tanggal
Tanggal yang dibuat menggunakan metode `.toLocaleDateString()` akan merender string berbeda di server (biasanya UTC) dibanding browser klien (sesuai zona waktu PC pengunjung, seperti WIB). Hal ini memicu pesan error *Hydration Mismatch* di konsol.
* **Aturan**: Tambahkan atribut `suppressHydrationWarning` pada elemen HTML terdekat yang menampilkan tanggal yang diformat secara dinamis:
  ```tsx
  <td suppressHydrationWarning>{formatDate(user.createdAt)}</td>
  ```

---

## 🔒 Lisensi & Hak Cipta
© 2026 Copyright Kiswah Tour & Travel. Hak Cipta Dilindungi Undang-Undang.
