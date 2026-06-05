'use server';

import { db } from '@/lib/db';
import { articles } from '@/lib/db/schema';
import { getSession } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';

export async function saveArticleAction(formData: FormData) {
  const session = await getSession();
  if (!session) {
    return { error: 'Unauthorized' };
  }

  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = formData.get('content') as string;
  const featuredImage = formData.get('featuredImage') as string;
  const status = formData.get('status') as 'draft' | 'published';
  const categoryId = formData.get('categoryId') ? parseInt(formData.get('categoryId') as string) : null;

  if (!title || !slug || !content) {
    return { error: 'Judul, Slug, dan Konten wajib diisi' };
  }

  try {
    await db.insert(articles).values({
      title,
      slug,
      content,
      featuredImage,
      status,
      authorId: session.userId,
      categoryId,
    });
  } catch (error: any) {
    console.error('Save Article Error:', error);
    if (error.message?.includes('UNIQUE')) {
      return { error: 'Slug sudah digunakan, silakan buat slug yang unik' };
    }
    return { error: `Gagal menyimpan artikel: ${error.message || 'Unknown error'}` };
  }

  revalidatePath('/artikel');
  revalidatePath('/admin/dashboard/articles');
  redirect('/admin/dashboard/articles');
}

export async function updateArticleAction(id: number, formData: FormData) {
  const session = await getSession();
  if (!session) {
    return { error: 'Unauthorized' };
  }

  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = formData.get('content') as string;
  const featuredImage = formData.get('featuredImage') as string;
  const status = formData.get('status') as 'draft' | 'published';
  const categoryId = formData.get('categoryId') ? parseInt(formData.get('categoryId') as string) : null;

  if (!title || !slug || !content) {
    return { error: 'Judul, Slug, dan Konten wajib diisi' };
  }

  try {
    await db.update(articles).set({
      title,
      slug,
      content,
      featuredImage,
      status,
      categoryId,
      updatedAt: new Date().toISOString().replace('T', ' ').split('.')[0],
    }).where(eq(articles.id, id));
  } catch (error: any) {
    if (error.message?.includes('UNIQUE')) {
      return { error: 'Slug sudah digunakan, silakan buat slug yang unik' };
    }
    return { error: 'Gagal memperbarui artikel' };
  }

  revalidatePath('/artikel');
  revalidatePath('/admin/dashboard/articles');
  redirect('/admin/dashboard/articles');
}

export async function deleteArticleAction(id: number) {
  const session = await getSession();
  if (!session) {
    return { error: 'Unauthorized' };
  }

  try {
    await db.delete(articles).where(eq(articles.id, id));
    revalidatePath('/artikel');
    revalidatePath('/admin/dashboard/articles');
    return { success: true };
  } catch (error) {
    return { error: 'Gagal menghapus artikel' };
  }
}
