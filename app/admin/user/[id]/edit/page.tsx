import React from 'react';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { getSession } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import EditUserForm from './EditUserForm';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  const { id } = await params;
  
  // Only admins can access this page
  if (!session || session.role !== 'admin') {
    redirect('/admin/dashboard');
  }

  const userId = parseInt(id);
  if (isNaN(userId)) {
    notFound();
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
  });

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins pb-12">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-4">
          <Link 
            href="/admin/dashboard" 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          >
            <HiArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#291F15]">Edit Pengguna</h1>
            <p className="text-sm text-gray-500">Ubah informasi akun untuk {user.name}</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden p-8">
          <EditUserForm user={user} />
        </div>
      </main>
    </div>
  );
}
