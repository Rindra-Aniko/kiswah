'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { HiLogout } from 'react-icons/hi';

export default function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`flex items-center gap-2 px-5 py-2.5 border rounded-lg font-medium text-sm shadow-sm transition-all duration-200 ease-in-out cursor-pointer select-none
        ${pending
          ? 'bg-red-50 border-red-200 text-red-500 cursor-not-allowed opacity-80'
          : 'border-gray-300 text-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white hover:-translate-y-0.5 hover:shadow-md active:scale-95 active:translate-y-0'
        }
      `}
    >
      {pending ? (
        <>
          <svg className="animate-spin h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="font-semibold animate-pulse">Logout on process...</span>
        </>
      ) : (
        <>
          <HiLogout className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          <span>Keluar</span>
        </>
      )}
    </button>
  );
}
