'use client';

import React, { useState, useTransition } from 'react';
import { HiPencil, HiTrash, HiPlus, HiSearch, HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';
import { deleteUserAction, addUserAction } from '@/lib/actions/users';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'operator';
  createdAt: string | null;
}

export default function UserList({ initialUsers, currentRole }: { initialUsers: User[], currentRole: string }) {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr || dateStr === 'CURRENT_TIMESTAMP') return '-';
    
    // SQLite might return "YYYY-MM-DD HH:MM:SS". Some browsers need "T" for ISO
    const isoDateStr = dateStr.includes(' ') ? dateStr.replace(' ', 'T') : dateStr;
    const date = new Date(isoDateStr);
    
    if (isNaN(date.getTime())) return '-';
    
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const handleDelete = async (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus user ini?')) {
      const result = await deleteUserAction(id);
      if (result.error) {
        alert(result.error);
      } else {
        setUsers(users.filter(user => user.id !== id));
      }
    }
  };

  const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await addUserAction(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setIsModalOpen(false);
        // We could re-fetch or just reload the page since we used revalidatePath
        window.location.reload();
      }
    });
  };

  return (
    <>
      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Total User</p>
          <h3 className="text-3xl font-bold text-[#291F15] mt-1">{users.length}</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Admin Aktif</p>
          <h3 className="text-3xl font-bold text-[#291F15] mt-1">{users.filter(u => u.role === 'admin').length}</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Operator Aktif</p>
          <h3 className="text-3xl font-bold text-[#291F15] mt-1">{users.filter(u => u.role === 'operator').length}</h3>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        {currentRole === 'admin' && (
          <button 
            className="flex items-center gap-2 px-5 py-2.5 bg-[#291F15] text-white rounded-lg hover:bg-[#291F15]/90 transition-all font-medium text-sm shadow-sm"
            onClick={() => setIsModalOpen(true)}
          >
            <HiPlus className="w-5 h-5" />
            Tambah User
          </button>
        )}
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <HiSearch className="w-5 h-5" />
            </span>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#291F15] focus:border-transparent text-sm"
              placeholder="Cari nama atau email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Nama</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tanggal Dibuat</th>
                {currentRole === 'admin' && (
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Aksi</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.filter(u => 
                u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                u.email.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-[#291F15]">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm" suppressHydrationWarning>
                    {formatDate(user.createdAt)}
                  </td>
                  {currentRole === 'admin' && (
                    <td className="px-6 py-4 text-right space-x-2">
                      <Link 
                        href={`/admin/user/${user.id}/edit`}
                        className="inline-flex items-center p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit User"
                      >
                        <HiPencil className="w-5 h-5" />
                      </Link>
                      <button 
                        className="inline-flex items-center p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Hapus User"
                        onClick={() => handleDelete(user.id)}
                      >
                        <HiTrash className="w-5 h-5" />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#291F15]">Tambah Pengguna Baru</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <HiX className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddUser} className="p-6 space-y-4">
              {error && (
                <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center border border-red-100">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input name="name" type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] outline-none" placeholder="Masukkan nama..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input name="email" type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] outline-none" placeholder="admin@kiswah.id" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kata Sandi</label>
                <input name="password" type="password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] outline-none" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select name="role" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#291F15] outline-none bg-white">
                  <option value="operator">Operator</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full py-3 bg-[#291F15] text-white rounded-lg font-semibold hover:bg-[#291F15]/90 transition-all disabled:opacity-70"
                >
                  {isPending ? 'Menyimpan...' : 'Simpan User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
