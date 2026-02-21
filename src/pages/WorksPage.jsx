import { useState } from 'react';
import SimplePage from '../components/layout/SimplePage';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import CTABanner from '../components/ui/CTABanner';
import Card from '../components/ui/Card';
import { works } from '../data/works';
import { createBreadcrumbList } from '../utils/structuredData';

const categories = ['全て', '屋根', '外壁', '雨樋'];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('全て');
  const bcItems = [{ label: '施工事例' }];
  const jsonLd = createBreadcrumbList([{ label: 'ホーム', path: '/' }, ...bcItems]);

  const filteredWorks =
    activeCategory === '全て'
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <div className="animate-fade-in pt-20">
      <SEO
        title="施工事例"
        description="建築鈑金はたの施工事例をご紹介。福井県内の屋根リフォーム・外壁工事・雨樋交換の実績を写真付きで掲載しています。"
        jsonLd={jsonLd}
      />
      <div className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">施工事例</h1>
        <p className="text-xl text-emerald-100">
          福井県内での実績を一部ご紹介します
        </p>
      </div>
      <Breadcrumb items={bcItems} />

      <div className="container mx-auto max-w-4xl py-16 px-4">
        {/* フィルタタブ */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
                activeCategory === cat
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredWorks.map((work, i) => (
            <Card key={i} className="overflow-hidden p-0">
              <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-500 font-bold relative">
                <div className="absolute top-2 left-2 bg-emerald-600 text-white px-3 py-1 text-sm font-bold rounded shadow-sm">
                  {work.work}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">
                  {work.area} / {work.age}
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li>
                    <span className="font-bold text-emerald-800 inline-block w-20">
                      元の屋根材:
                    </span>{' '}
                    {work.type}
                  </li>
                  <li>
                    <span className="font-bold text-emerald-800 inline-block w-20">
                      工期:
                    </span>{' '}
                    {work.duration}
                  </li>
                  <li>
                    <span className="font-bold text-emerald-800 inline-block w-20">
                      参考価格:
                    </span>{' '}
                    <span className="text-lg font-bold text-orange-600">
                      {work.price}
                    </span>
                  </li>
                </ul>
                <p className="text-slate-600 text-sm bg-slate-50 p-3 rounded">
                  <strong>お客様の悩み：</strong>{' '}
                  塗装が剥がれ、見た目が悪くなってきた。葺き替えは高いので安く綺麗にしたい。
                  <br />
                  <strong>解決：</strong>{' '}
                  C/guard工法により、予算内で新品同様の屋根に生まれ変わりました。
                </p>
              </div>
            </Card>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <p className="text-center text-slate-500 py-12">
            該当する施工事例がありません。
          </p>
        )}
      </div>

      <CTABanner />
    </div>
  );
}
