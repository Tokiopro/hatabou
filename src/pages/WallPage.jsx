import { AlertTriangle, CheckCircle } from 'lucide-react';
import ServicePageLayout from '../components/layout/ServicePageLayout';
import Card from '../components/ui/Card';
import { faqData } from '../data/faq';

const degradationSigns = [
  { title: 'チョーキング（白い粉）', desc: '外壁を手で触ると白い粉がつく状態。塗膜の防水機能が低下しているサインです。' },
  { title: 'ひび割れ（クラック）', desc: '外壁にひび割れが入っている状態。放置すると雨水が浸入し、内部が腐食します。' },
  { title: 'コーキングの劣化', desc: 'サイディングの継ぎ目の防水材が割れ・痩せている状態。雨漏りの原因になります。' },
  { title: '色あせ・汚れ', desc: '紫外線や雨風による経年劣化。美観だけでなく、防水性も低下しています。' },
];

const methods = [
  {
    title: '外壁塗装',
    price: '80〜150万円',
    desc: '既存の外壁の上から塗装する方法。劣化が軽度な場合に最適。コストを抑えつつ美観と防水性を回復します。',
    fit: '軽度のチョーキング・色あせ',
  },
  {
    title: '外壁カバー工法',
    price: '150〜300万円',
    desc: '既存の外壁の上から新しい外壁材を重ねる方法。解体不要で断熱性もUP。ガルバリウム鋼板が人気です。',
    fit: '中程度の劣化・断熱性向上したい場合',
  },
  {
    title: '外壁張り替え',
    price: '200〜400万円',
    desc: '既存の外壁を撤去し、新しい外壁材に張り替える方法。下地の状態も確認・補修できます。',
    fit: '劣化が激しい場合・下地の傷みが心配な場合',
  },
];

export default function WallPage() {
  return (
    <ServicePageLayout
      title="外壁リフォーム"
      subtitle="塗装・カバー工法・張り替え、最適な方法をご提案"
      seoTitle="外壁リフォーム"
      seoDescription="福井県の外壁リフォームは建築鈑金はた。塗装・カバー工法・張り替えから最適な工法をご提案。ガルバリウム鋼板やサイディングに対応。200〜400万円。無料見積り実施中。"
      serviceName="外壁リフォーム"
      priceRange="200〜400万円"
      breadcrumbItems={[{ label: '外壁リフォーム' }]}
      faqItems={faqData.wall.items}
    >
      {/* 結論ボックス */}
      <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
        <p className="text-lg text-slate-800 leading-relaxed">
          <strong className="text-emerald-800">結論：</strong>
          外壁の劣化は築10〜15年で始まります。塗装・カバー工法・張り替えの中から、
          劣化の程度とご予算に合わせた最適な方法をご提案します。
          屋根と同時施工で足場代を節約できます。
        </p>
      </div>

      {/* 劣化サイン */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-orange-500 mr-3" />
          外壁の劣化サイン
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {degradationSigns.map((sign, i) => (
            <Card key={i} className="border-l-4 border-l-orange-400">
              <h3 className="font-bold text-lg text-slate-800 mb-2">
                {sign.title}
              </h3>
              <p className="text-slate-600 text-sm">{sign.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 工法選択肢 */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">
          工法の選択肢と料金目安
        </h2>
        <div className="space-y-6">
          {methods.map((method, i) => (
            <Card key={i} className="border-t-4 border-t-emerald-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-xl font-bold text-emerald-900">
                  {method.title}
                </h3>
                <span className="text-2xl font-bold text-orange-600 mt-2 md:mt-0">
                  {method.price}
                </span>
              </div>
              <p className="text-slate-700 mb-3">{method.desc}</p>
              <p className="text-sm bg-emerald-50 p-3 rounded border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 inline mr-1" />
                <strong>こんな場合に：</strong> {method.fit}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 屋根と同時施工メリット */}
      <section>
        <div className="bg-slate-800 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-center">
            屋根と同時施工で足場代を節約
          </h2>
          <p className="text-slate-300 text-center mb-6">
            屋根工事と外壁工事を同時に行うと、足場の設置が1回で済むため
            <strong className="text-orange-400">20〜30万円の足場代を節約</strong>
            できます。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-900/30 p-4 rounded-lg border border-red-800/50">
              <p className="font-bold text-red-300 mb-1">別々に工事した場合</p>
              <p className="text-slate-300 text-sm">
                足場を2回設置 → 足場代が2回分かかる
              </p>
            </div>
            <div className="bg-emerald-900/30 p-4 rounded-lg border border-emerald-700/50">
              <p className="font-bold text-emerald-300 mb-1">同時施工の場合</p>
              <p className="text-slate-300 text-sm">
                足場は1回 → 20〜30万円おトクに！
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
