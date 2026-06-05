import React from 'react';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { getSession } from '@/lib/auth';
import UserList from './UserList';
import { logoutAction } from '@/lib/actions/auth';
import { HiLogout, HiBookOpen, HiUsers, HiCalendar } from 'react-icons/hi';
import Link from 'next/link';

export const runtime = 'edge';

export default async function AdminDashboardPage() {
  const session = await getSession();
  const allUsers = await db.query.users.findMany({
    orderBy: (users, { desc }) => [desc(users.createdAt)],
  });

  // Map to User interface expected by UserList
  const formattedUsers = allUsers.map(u => ({
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role as 'admin' | 'operator',
    createdAt: u.createdAt,
  }));

  return (
    <div className="min-h-screen bg-gray-50 font-poppins pb-12">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#291F15]">Dashboard Pengelola</h1>
            <p className="text-sm text-gray-500">Selamat datang, <span className="font-semibold text-[#291F15]">{session?.name}</span> ({session?.role})</p>
          </div>
          <div className="flex gap-4">
            <form action={logoutAction}>
              <button 
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium text-sm shadow-sm"
              >
                <HiLogout className="w-5 h-5" />
                Keluar
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Navigation Menu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl border-2 border-[#291F15] shadow-sm">
            <div className="p-3 bg-[#291F15] rounded-lg text-white">
              <HiUsers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#291F15]">Manajemen User</h3>
              <p className="text-sm text-gray-500">Kelola admin dan operator sistem</p>
            </div>
          </div>
          <Link 
            href="/admin/dashboard/articles"
            className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-[#291F15] transition-all group"
          >
            <div className="p-3 bg-blue-600 rounded-lg text-white group-hover:bg-[#291F15] transition-colors">
              <HiBookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#291F15]">Manajemen Artikel</h3>
              <p className="text-sm text-gray-500">Tulis dan publikasikan konten berita</p>
            </div>
          </Link>
          <Link 
            href="/admin/dashboard/schedules"
            className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-[#B48421] transition-all group"
          >
            <div className="p-3 bg-amber-600 rounded-lg text-white group-hover:bg-[#B48421] transition-colors">
              <HiCalendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#291F15]">Manajemen Jadwal</h3>
              <p className="text-sm text-gray-500">Kelola kuota & jadwal keberangkatan</p>
            </div>
          </Link>
        </div>

        <UserList initialUsers={formattedUsers} currentRole={session?.role || 'operator'} />
      </main>
    </div>
  );
}
