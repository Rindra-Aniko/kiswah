import React from 'react';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import CreateScheduleForm from './CreateScheduleForm';

export const runtime = 'edge';

export default async function NewSchedulePage() {
  const session = await getSession();
  if (!session) {
    redirect('/admin');
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins pb-12">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/admin/dashboard/schedules" 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
            >
              <HiArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-[#291F15]">Tambah Jadwal Baru</h1>
              <p className="text-sm text-gray-500">Input jadwal keberangkatan dan detail paket</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <CreateScheduleForm />
      </main>
    </div>
  );
}
