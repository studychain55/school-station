'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Props {
  siteId: string;
  facilityTable: string;
  facilityId: number;
  facilityUid: string;
  facilityName: string;
}

export default function InquiryForm({ siteId, facilityTable, facilityId, facilityUid, facilityName }: Props) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('inquiries').insert({
      site_id: siteId, facility_table: facilityTable, facility_id: facilityId,
      facility_uid: facilityUid, name: form.name, email: form.email,
      phone: null, subject: `${facilityName}へのお問い合わせ`,
      message: form.message, inquiry_type: 'general',
    });
    setStatus(error ? 'error' : 'success');
  };

  if (status === 'success') return (
    <div className="p-6 bg-green-50 rounded-xl text-center">
      <p className="text-[#1e782d] font-bold text-lg">お問い合わせを受け付けました</p>
      <p className="text-gray-600 mt-2 text-sm">内容を確認の上、ご連絡いたします。</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Trust signal */}
      <div className="flex items-center gap-2 bg-[#f0f6f0] rounded-lg px-4 py-3 text-sm text-[#1e782d] font-semibold">
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        無料・30秒で送信完了。個人情報は厳重に管理されます。
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">お名前 <span className="text-red-500">*</span></label>
        <input required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1e782d]" placeholder="山田 太郎"/>
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">メールアドレス <span className="text-red-500">*</span></label>
        <input required type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1e782d]" placeholder="example@email.com"/>
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">お問い合わせ内容 <span className="text-red-500">*</span></label>
        <textarea required value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}
          rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#1e782d]" placeholder="ご質問・ご要望をご記入ください"/>
      </div>
      {status==='error' && <p className="text-red-500 text-sm">送信に失敗しました。もう一度お試しください。</p>}
      <button type="submit" disabled={status==='loading'}
        className="w-full bg-[#1e782d] text-white font-bold py-4 rounded-lg disabled:opacity-50 hover:bg-[#155420] transition-colors">
        {status==='loading'?'送信中...':'無料でお問い合わせを送信する'}
      </button>
      <p className="text-xs text-center text-gray-400">送信後、担当者より折り返しご連絡いたします。プライバシーポリシーに基づき個人情報を管理します。</p>
    </form>
  );
}
