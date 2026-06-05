'use client';

import React, { useState } from 'react';
import { HiPencil, HiTrash, HiSearch } from 'react-icons/hi';
import Link from 'next/link';
import { deleteScheduleAction } from '@/lib/actions/schedules';

export default function ScheduleList({ initialSchedules }: { initialSchedules: any[] }) {
  const [schedules, setSchedules] = useState(initialSchedules);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = async (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus jadwal ini?')) {
      const result = await deleteScheduleAction(id);
      if (result.error) {
        alert(result.error);
      } else {
        setSchedules(schedules.filter(s => s.id !== id));
      }
    }
  };

  const filteredSchedules = schedules.filter(s => 
    s.monthYear.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.packageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.airline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="relative w-full sm:w-96">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <HiSearch className="w-5 h-5" />
          </span>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B48421] focus:border-transparent text-sm"
            placeholder="Cari jadwal, paket, atau maskapai..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Jadwal & Paket</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Hotel</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Maskapai</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Kuota</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredSchedules.map((schedule) => (
              <tr key={schedule.id} className="hover:bg-gray-50/50 transition-colors text-sm">
                <td className="px-6 py-4">
                  <div className="font-bold text-[#291F15]">{schedule.monthYear}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{schedule.packageName}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-700">{schedule.hotel1} ({schedule.hotel1Stars}★)</div>
                  <div className="text-gray-500 text-xs">{schedule.hotel2} ({schedule.hotel2Stars}★)</div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-600">{schedule.airline}</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    schedule.seatsAvailable === 'FULL' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {schedule.seatsAvailable}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <Link 
                    href={`/admin/dashboard/schedules/${schedule.id}/edit`}
                    className="inline-flex items-center p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit Jadwal"
                  >
                    <HiPencil className="w-5 h-5" />
                  </Link>
                  <button 
                    onClick={() => handleDelete(schedule.id)}
                    className="inline-flex items-center p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Hapus Jadwal"
                  >
                    <HiTrash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {filteredSchedules.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                  Belum ada jadwal keberangkatan yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
