'use client';

import React, { useState, useTransition } from 'react';
import { updateUserAction } from '@/lib/actions/users';
import { useRouter } from 'next/navigation';
import { HiEye, HiEyeOff } from 'react-icons/hi';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function EditUserForm({ user }: { user: User }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await updateUserAction(user.id, formData);
      if (result.error) {
        setError(result.error);
      } else {
        router.push('/admin/dashboard');
        router.refresh();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm text-center border border-red-100 font-medium">
          {error}
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-[#291F15] mb-1.5">Nama Lengkap</label>
          <input 
            name="name" 
            type="text" 
            required 
            defaultValue={user.name}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] focus:border-transparent outline-none transition-all" 
            placeholder="Masukkan nama..." 
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#291F15] mb-1.5">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            defaultValue={user.email}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] focus:border-transparent outline-none transition-all" 
            placeholder="admin@kiswah.id" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#291F15] mb-1.5">Kata Sandi Baru (kosongkan jika tidak ingin diubah)</label>
          <div className="relative">
            <input 
              name="password" 
              type={showPassword ? 'text' : 'password'} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] focus:border-transparent outline-none transition-all pr-12" 
              placeholder="••••••••" 
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <HiEyeOff className="h-5 w-5" />
              ) : (
                <HiEye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#291F15] mb-1.5">Role</label>
          <select 
            name="role" 
            defaultValue={user.role}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] focus:border-transparent outline-none bg-white transition-all"
          >
            <option value="operator">Operator</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      <div className="pt-6 flex gap-4">
        <button 
          type="submit" 
          disabled={isPending}
          className="flex-1 py-3.5 bg-[#291F15] text-white rounded-lg font-bold hover:bg-[#291F15]/90 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
        >
          {isPending ? 'Menyimpan Perubahan...' : 'Simpan Perubahan'}
        </button>
        <button 
          type="button"
          onClick={() => router.back()}
          className="flex-1 py-3.5 border border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-all transform active:scale-[0.98]"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
