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

const INQUIRY_TYPES = [
  { value: 'trial', label: '無料体験授業を希望' },
  { value: 'fee', label: '費用・料金について' },
  { value: 'curriculum', label: 'カリキュラムについて' },
  { value: 'general', label: 'その他のご質問' },
];

export default function InquiryForm({ siteId, facilityTable, facilityId, facilityUid, facilityName }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', inquiry_type: 'trial' });
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('inquiries').insert({
      site_id: siteId, facility_table: facilityTable, facility_id: facilityId,
      facility_uid: facilityUid, name: form.name, email: form.email,
      phone: form.phone || null,
      subject: `${facilityName}へのお問い合わせ（${INQUIRY_TYPES.find(t => t.value === form.inquiry_type)?.label}）`,
      message: form.message, inquiry_type: form.inquiry_type,
    });
    setStatus(error ? 'error' : 'success');
  };

  if (status === 'success') return (
    <div className="p-8 bg-green-50 rounded-xl text-center border border-green-200">
      <div className="text-4xl mb-3">✅</div>
      <p className="text-green-700 font-bold text-lg mb-1">お問い合わせを受け付けました</p>
      <p className="text-gray-600 text-sm">通常24時間以内にご連絡いたします。</p>
    </div>
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-5 p-3 bg-orange-50 rounded-lg border border-orange-100">
        {['体験授業・相談は無料', '返信は24時間以内', '個人情報は厳守'].map((text) => (
          <span key={text} className="flex items-center gap-1 text-xs text-orange-700 font-medium">
            <span>✓</span> {text}
          </span>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">お問い合わせ種別 <span className="text-red-500">*</span></label>
          <div className="grid grid-cols-2 gap-2">
            {INQUIRY_TYPES.map((type) => (
              <label
                key={type.value}
                className={`flex items-center gap-2 px-3 py-2.5 border rounded-lg cursor-pointer text-sm transition-colors ${
                  form.inquiry_type === type.value
                    ? 'border-orange-500 bg-orange-50 text-orange-700 font-medium'
                    : 'border-gray-300 text-gray-600 hover:border-orange-400'
                }`}
              >
                <input type="radio" name="inquiry_type" value={type.value}
                  checked={form.inquiry_type === type.value}
                  onChange={e => setForm(f => ({ ...f, inquiry_type: e.target.value }))}
                  className="sr-only" />
                {type.label}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">お名前 <span className="text-red-500">*</span></label>
          <input required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200" placeholder="山田 太郎"/>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">メールアドレス <span className="text-red-500">*</span></label>
          <input required type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200" placeholder="example@email.com"/>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">電話番号 <span className="text-xs text-gray-400 font-normal">（任意）</span></label>
          <input type="tel" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200" placeholder="090-1234-5678"/>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">ご質問・メッセージ <span className="text-red-500">*</span></label>
          <textarea required value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}
            rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200"
            placeholder="お子様の学年・目標・ご質問などをお気軽にどうぞ"/>
        </div>
        {status==='error' && <p className="text-red-500 text-sm bg-red-50 px-3 py-2 rounded-lg">送信に失敗しました。もう一度お試しください。</p>}
        <button type="submit" disabled={status==='loading'}
          className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg disabled:opacity-50 hover:bg-orange-600 transition-colors text-sm">
          {status==='loading' ? '送信中...' : '無料で問い合わせる →'}
        </button>
        <p className="text-[10px] text-gray-400 text-center">送信いただいた情報は、お問い合わせ対応にのみ使用します。</p>
      </form>
    </div>
  );
}
