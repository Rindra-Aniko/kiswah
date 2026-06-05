'use client';

import React, { useState, useTransition } from 'react';
import { saveScheduleAction } from '@/lib/actions/schedules';
import { HiSave, HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function CreateScheduleForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const [isFull, setIsFull] = useState(false);
  const [seats, setSeats] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await saveScheduleAction(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
      {error && (
        <div className="mb-6 bg-red-50 text-red-500 p-4 rounded-lg text-sm border border-red-100 font-medium flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)}><HiX className="w-5 h-5" /></button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bulan & Tahun */}
          <div>
            <label className="block text-sm font-bold text-[#291F15] mb-2">Bulan & Tahun</label>
            <input 
              name="monthYear"
              type="text" 
              required 
              placeholder="Contoh: Juni 2026"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48421] focus:border-transparent outline-none transition-all" 
            />
          </div>

          {/* Nama Paket */}
          <div>
            <label className="block text-sm font-bold text-[#291F15] mb-2">Nama Paket</label>
            <input 
              name="packageName"
              type="text" 
              required 
              placeholder="Contoh: Paket Umrah Ekonomi-Reguler-Arbain"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48421] focus:border-transparent outline-none transition-all" 
            />
          </div>

          {/* Hotel 1 */}
          <div>
            <label className="block text-sm font-bold text-[#291F15] mb-2">Hotel 1 (Makkah/Madinah)</label>
            <input 
              name="hotel1"
              type="text" 
              required 
              placeholder="Nama Hotel"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48421] focus:border-transparent outline-none transition-all" 
            />
          </div>

          {/* Bintang Hotel 1 */}
          <div>
            <label className="block text-sm font-bold text-[#291F15] mb-2">Bintang Hotel 1</label>
            <select 
              name="hotel1Stars"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48421] focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="3">3 Bintang</option>
              <option value="4">4 Bintang</option>
              <option value="5">5 Bintang</option>
            </select>
          </div>

          {/* Hotel 2 */}
          <div>
            <label className="block text-sm font-bold text-[#291F15] mb-2">Hotel 2 (Makkah/Madinah)</label>
            <input 
              name="hotel2"
              type="text" 
              required 
              placeholder="Nama Hotel"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48421] focus:border-transparent outline-none transition-all" 
            />
          </div>

          {/* Bintang Hotel 2 */}
          <div>
            <label className="block text-sm font-bold text-[#291F15] mb-2">Bintang Hotel 2</label>
            <select 
              name="hotel2Stars"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48421] focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="3">3 Bintang</option>
              <option value="4">4 Bintang</option>
              <option value="5">5 Bintang</option>
            </select>
          </div>

          {/* Maskapai */}
          <div>
            <label className="block text-sm font-bold text-[#291F15] mb-2">Maskapai Penerbangan</label>
            <input 
              name="airline"
              type="text" 
              required 
              placeholder="Contoh: AIR ASIA"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48421] focus:border-transparent outline-none transition-all" 
            />
          </div>

          {/* Logo Maskapai (Opsional) */}
          <div>
            <label className="block text-sm font-bold text-[#291F15] mb-2">URL Logo Maskapai (Opsional)</label>
            <input 
              name="airlineLogo"
              type="text" 
              placeholder="/logos/airasia.png"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48421] focus:border-transparent outline-none transition-all" 
            />
          </div>

          {/* Kuota Tersedia */}
          <div>
            <label className="block text-sm font-bold text-[#291F15] mb-2">Status Kuota</label>
            <div className="flex flex-col gap-3">
              <label className="inline-flex items-center gap-2.5 cursor-pointer">
                <input 
                  type="checkbox"
                  checked={isFull}
                  onChange={(e) => {
                    setIsFull(e.target.checked);
                  }}
                  className="w-5 h-5 rounded border-gray-300 text-[#B48421] focus:ring-[#B48421]"
                />
                <span className="text-sm font-medium text-gray-700">Tandai sebagai Penuh (FULL)</span>
              </label>
              
              {!isFull && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Jumlah Sisa Kursi / Kuota</label>
                  <input 
                    type="number" 
                    min="1"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    required={!isFull}
                    placeholder="Contoh: 50"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B48421] focus:border-transparent outline-none transition-all" 
                  />
                </div>
              )}
              
              <input 
                type="hidden" 
                name="seatsAvailable" 
                value={isFull ? 'FULL' : seats} 
              />
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <Link 
            href="/admin/dashboard/schedules"
            className="px-6 py-2.5 text-sm font-bold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all"
          >
            Batal
          </Link>
          <button 
            type="submit"
            disabled={isPending}
            className="flex items-center gap-2 px-8 py-2.5 bg-[#B48421] text-white rounded-xl hover:bg-[#966a10] transition-all font-bold shadow-sm disabled:opacity-50"
          >
            <HiSave className="w-5 h-5" />
            {isPending ? 'Menyimpan...' : 'Simpan Jadwal'}
          </button>
        </div>
      </form>
    </div>
  );
}
