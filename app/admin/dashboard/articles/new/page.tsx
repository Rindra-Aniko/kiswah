import React from 'react';
import CreateArticleForm from './CreateArticleForm';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';


export default async function NewArticlePage() {
  const session = await getSession();
  if (!session) {
    redirect('/admin');
  }

  const categories = await db.query.categories.findMany();

  return <CreateArticleForm categories={categories} />;
}
