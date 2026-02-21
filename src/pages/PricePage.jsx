import { Wrench, Home, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SimplePage from '../components/layout/SimplePage';

const icons = [Wrench, Home, CheckCircle];

export default function PricePage() {
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
    <SimplePage
      title="料金の目安"
      subtitle="価格が分かるから安心。目安と条件を公開します"
    >
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
    </SimplePage>
  );
}
