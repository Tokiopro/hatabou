import { Wrench, Home, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import CTABanner from '../components/ui/CTABanner';
import { createBreadcrumbList } from '../utils/structuredData';

export default function PricePage() {
  const bcItems = [{ label: '料金の目安' }];
  const jsonLd = createBreadcrumbList([{ label: 'ホーム', path: '/' }, ...bcItems]);

  const priceCards = [
    {
      icon: Wrench,
      title: '屋根リフォーム（C/guard等）',
      price: '150〜250',
      unit: '万円',
      desc: '足場代・材料費・施工費込み',
      extra:
        '追加になりやすいケース： 下地（野地板）の腐食が激しく、補修や張り替えが必要な場合。',
    },
    {
      icon: Home,
      title: '外壁リフォーム',
      price: '200〜400',
      unit: '万円',
      desc: '足場代込み / ガルバリウムやサイディングなど材料により変動',
    },
    {
      icon: CheckCircle,
      title: '雨樋工事',
      price: '20〜30',
      unit: '万円',
      desc: '全交換の目安（部分交換の場合は数万円〜対応可能）',
    },
  ];

  return (
    <div className="animate-fade-in pt-20">
      <SEO
        title="料金の目安"
        description="建築鈑金はたの料金目安。屋根リフォーム150〜250万円、外壁200〜400万円、雨樋20〜30万円。現地調査・点検・お見積りは無料です。"
        jsonLd={jsonLd}
      />
      <div className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">料金の目安</h1>
        <p className="text-xl text-emerald-100">
          価格が分かるから安心。目安と条件を公開します
        </p>
      </div>
      <Breadcrumb items={bcItems} />

      <div className="container mx-auto max-w-4xl py-16 px-4">
        <div className="space-y-8">
          {priceCards.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="border-t-8 border-t-emerald-600">
                <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center">
                  <Icon className="mr-2" /> {item.title}
                </h2>
                <div className="text-4xl font-bold text-slate-800 mb-2">
                  {item.price}
                  <span className="text-xl font-normal">{item.unit}</span>
                </div>
                <p className="text-slate-600 mb-4">{item.desc}</p>
                {item.extra && (
                  <div className="bg-slate-50 p-4 rounded text-sm text-slate-700">
                    <strong>{item.extra}</strong>
                  </div>
                )}
              </Card>
            );
          })}

          <div className="bg-orange-50 p-6 rounded-lg text-center mt-10 border border-orange-200">
            <p className="text-lg font-bold text-orange-800 mb-4">
              正確な金額は「無料現地調査」でお出しします
            </p>
            <Button href="/contact">無料見積もりを依頼する</Button>
          </div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
