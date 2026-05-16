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
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('inquiries').insert({
      site_id: siteId, facility_table: facilityTable, facility_id: facilityId,
      facility_uid: facilityUid, name: form.name, email: form.email,
      phone: form.phone || null, subject: `${facilityName}へのお問い合わせ`,
      message: form.message, inquiry_type: 'general',
    });
    setStatus(error ? 'error' : 'success');
  };

  if (status === 'success') return (
    <div className="p-6 bg-green-50 rounded-xl text-center border border-green-200">
      <div className="text-4xl mb-3">✅</div>
      <p className="text-[#1e782d] font-bold text-lg">お問い合わせを受け付けました</p>
      <p className="text-gray-600 mt-2 text-sm">内容を確認の上、通常1〜2営業日以内にご連絡いたします。</p>
    </div>
  );

  return (
    <div>
      {/* 信頼シグナルバー */}
      <div className="flex flex-wrap gap-2 mb-5 p-3 bg-green-50 rounded-lg border border-green-100">
        {[
          { icon: "🔒", text: "個人情報は厳重に管理" },
          { icon: "✉️", text: "1〜2営業日以内に返信" },
          { icon: "🚫", text: "しつこい勧誘は一切なし" },
        ].map((item) => (
          <span key={item.text} className="flex items-center gap-1 text-xs text-green-800 font-semibold">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">お名前 <span className="text-red-500">*</span></label>
          <input required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1e782d] focus:border-[#1e782d] transition-shadow" placeholder="山田 太郎"/>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">メールアドレス <span className="text-red-500">*</span></label>
          <input required type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1e782d] focus:border-[#1e782d] transition-shadow" placeholder="example@email.com"/>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">電話番号 <span className="text-gray-400 text-xs font-normal">（任意）</span></label>
          <input type="tel" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1e782d] focus:border-[#1e782d] transition-shadow" placeholder="090-1234-5678"/>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">お問い合わせ内容 <span className="text-red-500">*</span></label>
          <textarea required value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}
            rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1e782d] focus:border-[#1e782d] transition-shadow" placeholder="体験授業の日程・料金・カリキュラムなど、ご質問をご記入ください"/>
        </div>

        {status==='error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm font-semibold">送信に失敗しました。しばらく経ってからもう一度お試しください。</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status==='loading'}
          className="w-full font-bold py-4 rounded-xl text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: status === 'loading' ? '#6B7280' : 'linear-gradient(135deg, #1e782d 0%, #2a9d3f 100%)',
            color: '#fff',
            boxShadow: status === 'loading' ? 'none' : '0 4px 14px rgba(30,120,45,0.35)',
            transform: 'translateY(0)',
          }}
        >
          {status==='loading' ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              送信中...
            </span>
          ) : (
            '無料でお問い合わせを送信する →'
          )}
        </button>

        <p className="text-center text-xs text-gray-400">
          送信することでプライバシーポリシーに同意したものとみなします
        </p>
      </form>
    </div>
  );
}
