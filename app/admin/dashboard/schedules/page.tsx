import React from 'react';
import { db } from '@/lib/db';
import { schedules } from '@/lib/db/schema';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { HiPlus, HiArrowLeft } from 'react-icons/hi';
import ScheduleList from './ScheduleList';

export const runtime = 'edge';

export default async function SchedulesDashboardPage() {
  const session = await getSession();
  if (!session) {
    redirect('/admin');
  }

  const allSchedules = await db.query.schedules.findMany({
    orderBy: (schedules, { desc }) => [desc(schedules.createdAt)],
  });

  return (
    <div className="min-h-screen bg-gray-50 font-poppins pb-12">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/admin/dashboard" 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
            >
              <HiArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-[#291F15]">Manajemen Jadwal Keberangkatan</h1>
              <p className="text-sm text-gray-500">Kelola kuota dan jadwal paket Umrah Kiswah.id</p>
            </div>
          </div>
          <Link 
            href="/admin/dashboard/schedules/new"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#B48421] text-white rounded-lg hover:bg-[#B48421]/90 transition-all font-medium text-sm shadow-sm"
          >
            <HiPlus className="w-5 h-5" />
            Tambah Jadwal
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <ScheduleList initialSchedules={allSchedules} />
      </main>
    </div>
  );
}
