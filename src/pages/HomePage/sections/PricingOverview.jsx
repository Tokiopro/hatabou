import { CheckCircle } from 'lucide-react';
import { pricingItems } from '../../../data/pricing';

export default function PricingOverview() {
  return (
    <section className="py-20 bg-slate-800 text-white px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            リフォーム費用の目安
          </h2>
          <p className="text-emerald-200">
            価格が分からない不安をなくすため、目安を公開しています。
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {pricingItems.map((item, i) => (
            <div
              key={i}
              className="bg-slate-700 p-6 rounded-xl border border-slate-600 text-center"
            >
              <h3 className="text-xl font-bold text-emerald-300 mb-2">
                {item.title}
              </h3>
              <div className="text-3xl font-bold mb-2 text-white">
                {item.min}
                <span className="text-lg font-normal">〜</span>
                {item.max}
                <span className="text-xl">万円</span>
              </div>
              <p className="text-sm text-slate-300">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-300 text-sm mb-8">
            ※上記はあくまで目安です。屋根の形状、傷み具合、足場条件によって変動いたします。
            <br />
            正確な金額は、現地確認のうえで正式なお見積りとしてご提示させていただきます。
          </p>

          <div className="bg-emerald-900 border border-emerald-700 p-6 md:p-8 rounded-xl inline-block text-left shadow-lg">
            <h4 className="text-xl md:text-2xl font-bold text-orange-400 mb-6 flex items-center justify-center">
              <CheckCircle className="mr-2" /> 当店からの3つの「安心のお約束」
            </h4>
            <ul className="space-y-4 text-lg font-medium">
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 shrink-0" />{' '}
                現地調査・点検・お見積りは【完全無料】です。
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 shrink-0" />{' '}
                屋根の状態がわかる【写真付き点検レポート】をお渡しします。
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 shrink-0" />{' '}
                相見積もり歓迎。しつこい電話営業や訪問は一切いたしません。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
