import SimplePage from '../components/layout/SimplePage';
import Card from '../components/ui/Card';
import { works } from '../data/works';

export default function WorksPage() {
  return (
    <SimplePage
      title="施工事例"
      subtitle="福井県内での実績を一部ご紹介します"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {works.map((work, i) => (
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
    </SimplePage>
  );
}
