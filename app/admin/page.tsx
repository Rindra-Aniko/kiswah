'use client';

import React, { useState, useActionState } from 'react';
import Image from 'next/image';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { loginAction } from '@/lib/actions/auth';

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, action, isPending] = useActionState(loginAction, null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 font-poppins my-20">
      <div className="max-w-md w-full space-y-8 p-8 border border-[#291F15]/10 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-6">
             <Image 
                src="/image/logo.webp" 
                alt="Kiswah Logo" 
                width={120} 
                height={120}
                className="object-contain"
             />
          </div>
          <h2 className="text-3xl font-bold text-[#291F15] tracking-tight">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-[#291F15]/60">
            Silakan masuk ke akun pengelola Anda
          </p>
        </div>
        
        <form className="mt-8 space-y-6" action={action}>
          {state?.error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center border border-red-100">
              {state.error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#291F15]">
                Email atau Username
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                suppressHydrationWarning
                className="mt-1 block w-full px-4 py-3 border border-[#291F15]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#291F15] focus:border-transparent transition-all"
                placeholder="admin@kiswah.id"
              />
            </div>
            
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-[#291F15]">
                Kata Sandi
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  suppressHydrationWarning
                  className="block w-full px-4 py-3 border border-[#291F15]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#291F15] focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#291F15]/50 hover:text-[#291F15] transition-colors"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <HiEyeOff className="h-5 w-5" />
                  ) : (
                    <HiEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#291F15] focus:ring-[#291F15] border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#291F15]/70 cursor-pointer">
                Ingat saya
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-[#291F15] hover:underline transition-all">
                Lupa kata sandi?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-[#291F15] hover:bg-[#291F15]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#291F15] transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? 'Memproses...' : 'Masuk'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
