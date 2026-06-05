import React from 'react';
import { db } from '@/lib/db';
import { schedules } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { getSession } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import EditScheduleForm from './EditScheduleForm';

export default async function EditSchedulePage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) {
    redirect('/admin');
  }

  const { id } = await params;
  const scheduleId = parseInt(id);

  if (isNaN(scheduleId)) {
    notFound();
  }

  const schedule = await db.query.schedules.findFirst({
    where: eq(schedules.id, scheduleId),
  });

  if (!schedule) {
    notFound();
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
              <h1 className="text-2xl font-bold text-[#291F15]">Edit Jadwal</h1>
              <p className="text-sm text-gray-500">Perbarui detail jadwal keberangkatan</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <EditScheduleForm schedule={schedule} />
      </main>
    </div>
  );
}
