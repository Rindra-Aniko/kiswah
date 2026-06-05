'use server';

import { db } from '@/lib/db';
import { schedules } from '@/lib/db/schema';
import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';

export async function saveScheduleAction(formData: FormData) {
  const session = await getSession();
  if (!session) {
    return { error: 'Unauthorized' };
  }

  const monthYear = formData.get('monthYear') as string;
  const packageName = formData.get('packageName') as string;
  const hotel1 = formData.get('hotel1') as string;
  const hotel1Stars = parseInt(formData.get('hotel1Stars') as string) || 0;
  const hotel2 = formData.get('hotel2') as string;
  const hotel2Stars = parseInt(formData.get('hotel2Stars') as string) || 0;
  const airline = formData.get('airline') as string;
  const airlineLogo = formData.get('airlineLogo') as string;
  const seatsAvailable = formData.get('seatsAvailable') as string;

  if (!monthYear || !packageName || !hotel1 || !hotel2 || !airline || !seatsAvailable) {
    return { error: 'Semua field wajib diisi' };
  }

  try {
    await db.insert(schedules).values({
      monthYear,
      packageName,
      hotel1,
      hotel1Stars,
      hotel2,
      hotel2Stars,
      airline,
      airlineLogo,
      seatsAvailable,
    });
  } catch (error: any) {
    console.error('Save Schedule Error:', error);
    return { error: `Gagal menyimpan jadwal: ${error.message || 'Unknown error'}` };
  }

  revalidatePath('/jadwal');
  revalidatePath('/admin/dashboard/schedules');
  redirect('/admin/dashboard/schedules');
}

export async function updateScheduleAction(id: number, formData: FormData) {
  const session = await getSession();
  if (!session) {
    return { error: 'Unauthorized' };
  }

  const monthYear = formData.get('monthYear') as string;
  const packageName = formData.get('packageName') as string;
  const hotel1 = formData.get('hotel1') as string;
  const hotel1Stars = parseInt(formData.get('hotel1Stars') as string) || 0;
  const hotel2 = formData.get('hotel2') as string;
  const hotel2Stars = parseInt(formData.get('hotel2Stars') as string) || 0;
  const airline = formData.get('airline') as string;
  const airlineLogo = formData.get('airlineLogo') as string;
  const seatsAvailable = formData.get('seatsAvailable') as string;

  if (!monthYear || !packageName || !hotel1 || !hotel2 || !airline || !seatsAvailable) {
    return { error: 'Semua field wajib diisi' };
  }

  try {
    await db.update(schedules).set({
      monthYear,
      packageName,
      hotel1,
      hotel1Stars,
      hotel2,
      hotel2Stars,
      airline,
      airlineLogo,
      seatsAvailable,
      updatedAt: new Date().toISOString().replace('T', ' ').split('.')[0],
    }).where(eq(schedules.id, id));
  } catch (error: any) {
    console.error('Update Schedule Error:', error);
    return { error: 'Gagal memperbarui jadwal' };
  }

  revalidatePath('/jadwal');
  revalidatePath('/admin/dashboard/schedules');
  redirect('/admin/dashboard/schedules');
}

export async function deleteScheduleAction(id: number) {
  const session = await getSession();
  if (!session) {
    return { error: 'Unauthorized' };
  }

  try {
    await db.delete(schedules).where(eq(schedules.id, id));
    revalidatePath('/jadwal');
    revalidatePath('/admin/dashboard/schedules');
    return { success: true };
  } catch (error) {
    return { error: 'Gagal menghapus jadwal' };
  }
}
