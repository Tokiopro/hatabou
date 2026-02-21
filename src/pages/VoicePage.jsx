import { ThumbsUp } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import CTABanner from '../components/ui/CTABanner';
import SimplePage from '../components/layout/SimplePage';
import { createBreadcrumbList } from '../utils/structuredData';

export default function VoicePage() {
  const bcItems = [{ label: 'お客様の声' }];
  const jsonLd = createBreadcrumbList([{ label: 'ホーム', path: '/' }, ...bcItems]);

  return (
    <div className="animate-fade-in pt-20">
      <SEO
        title="お客様の声"
        description="建築鈑金はたで屋根・外壁・雨樋リフォームをされたお客様の声をご紹介。福井県内の50代〜70代のお客様から高い評価をいただいています。"
        jsonLd={jsonLd}
      />
      <div className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">お客様の声</h1>
        <p className="text-xl text-emerald-100">
          築20年前後の屋根、同じ悩みを持つ方が選んでいます
        </p>
      </div>
      <Breadcrumb items={bcItems} />

      <div className="container mx-auto max-w-4xl py-16 px-4 space-y-12">
        {testimonials.map((voice, i) => (
          <div
            key={i}
            className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-orange-100 text-orange-800 px-4 py-2 rounded-bl-xl font-bold text-sm shadow-sm">
              {voice.work}
            </div>
            <div className="flex items-center mb-6 border-b pb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-4">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-900">
                  {voice.area} / {voice.age}
                </h3>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-slate-800 text-sm mb-1 bg-slate-100 p-2 rounded">
                  Q. 工事前の悩みは？
                </p>
                <p className="text-slate-700 pl-2 border-l-4 border-orange-400">
                  {voice.q1}
                </p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm mb-1 bg-slate-100 p-2 rounded">
                  Q. 何が決め手で依頼しましたか？
                </p>
                <p className="text-slate-700 pl-2 border-l-4 border-orange-400">
                  {voice.q2}
                </p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm mb-1 bg-slate-100 p-2 rounded">
                  Q. 工事中の対応はいかがでしたか？
                </p>
                <p className="text-slate-700 pl-2 border-l-4 border-orange-400">
                  {voice.q3}
                </p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm mb-1 bg-slate-100 p-2 rounded">
                  Q. 仕上がり・今の感想をお聞かせください
                </p>
                <p className="text-slate-700 pl-2 border-l-4 border-orange-400 font-medium text-emerald-800">
                  {voice.q4}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTABanner />
    </div>
  );
}
