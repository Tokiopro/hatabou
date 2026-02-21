import { MapPin, Clock, Phone, Award, Users, Shield } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import CTABanner from '../components/ui/CTABanner';
import Card from '../components/ui/Card';
import { company } from '../data/company';
import { createBreadcrumbList } from '../utils/structuredData';

export default function CompanyPage() {
  const bcItems = [{ label: '会社案内' }];
  const jsonLd = createBreadcrumbList([{ label: 'ホーム', path: '/' }, ...bcItems]);

  return (
    <div className="animate-fade-in pt-20">
      <SEO
        title="会社案内"
        description="建築鈑金はたの会社案内。福井県を中心に屋根・外壁・雨樋リフォームを手がける地域密着の建築板金店です。代表挨拶、資格・実績、対応エリアをご紹介。"
        jsonLd={jsonLd}
      />
      <div className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">会社案内</h1>
        <p className="text-xl text-emerald-100">
          地域密着・誠実施工の建築板金店
        </p>
      </div>
      <Breadcrumb items={bcItems} />

      <div className="container mx-auto max-w-4xl py-16 px-4 space-y-16">
        {/* 会社概要 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">
            会社概要
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-slate-200">
                {[
                  ['屋号', company.name],
                  ['代表者', company.representative],
                  ['所在地', company.address.full],
                  ['電話番号', company.phone],
                  ['営業時間', `${company.hours}（${company.closed}）`],
                  ['事業内容', '屋根工事・外壁工事・雨樋工事・板金工事全般'],
                  ['対応エリア', company.areas.join(' / ')],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <th className="bg-emerald-50 text-emerald-900 font-bold text-sm p-4 w-1/3 text-left align-top">
                      {label}
                    </th>
                    <td className="p-4 text-slate-700 text-sm">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 代表挨拶 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">
            代表挨拶
          </h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <div className="md:flex md:gap-8">
              <div className="w-40 h-48 bg-slate-200 rounded-lg mx-auto md:mx-0 mb-6 md:mb-0 shrink-0 flex items-center justify-center text-slate-400 text-sm font-bold">
                写真
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  建築鈑金はたのページをご覧いただき、ありがとうございます。
                </p>
                <p>
                  私たちは福井県で、屋根・外壁・雨樋のリフォームを手がける建築板金の専門店です。
                  「雨仕舞い」と呼ばれる、雨水の流れを読み建物を雨漏りから守る技術を
                  大切にしながら、一棟一棟丁寧に施工しています。
                </p>
                <p>
                  訪問販売のような急かす営業は一切いたしません。
                  お客様のご予算と建物の状態を丁寧にヒアリングし、
                  本当に必要な工事だけをご提案いたします。
                </p>
                <p className="font-bold text-emerald-800">
                  「ちょっと見てもらうだけ」でもお気軽にお声がけください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 資格・実績 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">
            当店の強み
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-t-4 border-t-emerald-500">
              <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-emerald-900 mb-2">
                鈑金職人の技術
              </h3>
              <p className="text-slate-600 text-sm">
                建築板金技能士・職業訓練指導員の資格を持つ職人が直接施工。
                雨仕舞いの技術で確実な防水を実現します。
              </p>
            </Card>
            <Card className="text-center border-t-4 border-t-emerald-500">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-emerald-900 mb-2">
                一括提案で費用削減
              </h3>
              <p className="text-slate-600 text-sm">
                屋根・外壁・雨樋をまとめてご提案。足場の共有で
                20〜30万円の節約が可能です。
              </p>
            </Card>
            <Card className="text-center border-t-4 border-t-emerald-500">
              <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-emerald-900 mb-2">
                地域密着の安心感
              </h3>
              <p className="text-slate-600 text-sm">
                福井県内で地域に根ざした営業。工事後のアフターフォローも
                迅速に対応いたします。
              </p>
            </Card>
          </div>
        </section>

        {/* 所在地・営業時間 */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">
            所在地・営業時間
          </h2>
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-emerald-600 mr-3 shrink-0" />
                <span className="text-slate-700">{company.address.full}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-emerald-600 mr-3 shrink-0" />
                <span className="text-slate-700">
                  {company.hours}（{company.closed}）
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-emerald-600 mr-3 shrink-0" />
                <span className="text-slate-700">{company.phone}</span>
              </div>
            </div>
            <div className="mt-6 h-48 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 font-bold">
              Google Maps プレースホルダー
            </div>
          </div>
        </section>

        {/* 対応エリア */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">
            対応エリア
          </h2>
          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              {company.areas.map((area) => (
                <span
                  key={area}
                  className="bg-white px-4 py-2 rounded-full border border-emerald-300 font-bold text-emerald-800 text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center text-sm text-emerald-700">
              ※上記以外のエリアもお気軽にご相談ください。
            </p>
          </div>
        </section>
      </div>

      <CTABanner />
    </div>
  );
}
