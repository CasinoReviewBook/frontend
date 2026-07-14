'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Table, Column } from '../../../components/admin/Table';
import { Button } from '../../../components/admin/FormElements';
import { Plus } from 'lucide-react';

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/news`);
      const data = await res.json();
      setNews(data);
    } catch (err) {
      console.error("Failed to fetch news", err);
    }
    setIsLoading(false);
  };

  const handleEdit = (item: any) => {
    router.push(`/admin/news/edit/${item.id}`);
  };

  const handleDelete = async (item: any) => {
    if (confirm(`Are you sure you want to delete "${item.title}"?`)) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/news/${item.id}`, {
          method: 'DELETE'
        });
        if (res.ok) {
          fetchNews();
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const columns: Column[] = [
    { 
      header: 'Title', 
      accessor: 'title',
      render: (val, row) => (
        <div>
          <span className="font-semibold text-slate-800 block">{val}</span>
          <span className="text-xs text-slate-400">{row.slug}</span>
        </div>
      )
    },
    { 
      header: 'Author', 
      accessor: 'author',
      render: (val) => val?.name || 'Unknown'
    },
    { 
      header: 'Status', 
      accessor: 'status', 
      render: (val) => (
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
          val === 'published' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 
          val === 'draft' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
          'bg-slate-50 text-slate-600 border border-slate-200'
        }`}>
          {val}
        </span>
      )
    },
    { 
      header: 'Date', 
      accessor: 'created_at',
      render: (val) => new Date(val).toLocaleDateString()
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">News Articles</h1>
          <p className="text-sm text-slate-500 mt-1.5 font-medium">Manage your news content and updates.</p>
        </div>
        <Button onClick={() => router.push('/admin/news/new')} className="gap-2">
          <Plus size={18} />
          Add News
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-indigo-150 border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="shadow-lg shadow-slate-100/50 rounded-xl overflow-hidden border border-slate-100 bg-white">
          <Table columns={columns} data={news} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      )}
    </div>
  );
}
