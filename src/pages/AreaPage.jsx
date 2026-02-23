import { useParams, Navigate, Link } from 'react-router';
import { Home, Wrench, Shield, Droplets, CloudRain } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import CTABanner from '../components/ui/CTABanner';
import { getAreaBySlug } from '../data/areas';
import { createBreadcrumbList, createService } from '../utils/structuredData';

const services = [
  {
    path: '/roof',
    label: '屋根リフォーム',
    icon: Home,
    description: 'C/guardカバー工法で費用を抑えた屋根リフォーム',
  },
  {
    path: '/wall',
    label: '外壁リフォーム',
    icon: Shield,
    description: '外壁の塗装・張り替えで住まいを守る',
  },
  {
    path: '/gutter',
    label: '雨樋工事',
    icon: Droplets,
    description: '雨樋の修理・交換で雨水トラブルを解決',
  },
  {
    path: '/leak',
    label: '雨漏り修理',
    icon: CloudRain,
    description: '原因特定から確実な修理まで対応',
  },
];

export default function AreaPage() {
  const { slug } = useParams();
  const area = getAreaBySlug(slug);

  if (!area) {
    return <Navigate to="/404" replace />;
  }

  const bcItems = [
    { label: '対応エリア', path: '/area/fukui' },
    { label: area.name },
  ];

  const jsonLd = [
    createBreadcrumbList([{ label: 'ホーム', path: '/' }, ...bcItems]),
    createService({
      name: `${area.name}の屋根・外壁・雨樋リフォーム`,
      description: area.description,
    }),
  ];

  return (
    <div className="animate-fade-in pt-20">
      <SEO
        title={`${area.name}の屋根・外壁・雨樋リフォーム`}
        description={area.description}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <div className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {area.name}の屋根・外壁・雨樋リフォーム
        </h1>
        <p className="text-xl text-emerald-100">
          地域密着の鈑金店が、{area.name}の住まいを守ります
        </p>
      </div>

      <Breadcrumb items={bcItems} />

      {/* 結論ボックス（LLMO/AIO対応） */}
      <section className="container mx-auto max-w-4xl px-4 py-8">
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg shadow-md">
          <p className="text-lg text-slate-800 leading-relaxed">
            <strong className="text-emerald-800">結論：</strong>
            {area.name}で屋根・外壁・雨樋のリフォームをお考えなら、建築鈑金はたにご相談ください。
            地域の住宅事情を熟知した鈑金職人が、適正価格で丁寧に施工いたします。
            現地調査・お見積りは無料です。
          </p>
        </div>
      </section>

      {/* 地域紹介 */}
      <section className="container mx-auto max-w-4xl px-4 py-8">
        <p className="text-lg text-slate-700 leading-relaxed mb-8">
          {area.intro}
        </p>
      </section>

      {/* 地域の住宅事情 */}
      <section className="container mx-auto max-w-4xl px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
          {area.name}の住宅事情
        </h2>
        <div className="space-y-4">
          {area.features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-lg shadow-sm border border-slate-200"
            >
              <p className="text-slate-700 leading-relaxed">
                <span className="text-emerald-700 font-bold mr-2">
                  {i + 1}.
                </span>
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* よくある相談内容 */}
      <section className="container mx-auto max-w-4xl px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
          {area.name}でよくあるご相談
        </h2>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <ul className="space-y-3">
            {area.commonIssues.map((issue, i) => (
              <li
                key={i}
                className="flex items-start text-slate-700"
              >
                <Wrench className="w-5 h-5 text-orange-500 mr-3 mt-0.5 shrink-0" />
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 対応サービス一覧 */}
      <section className="container mx-auto max-w-4xl px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
          {area.name}で対応可能なサービス
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="block bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-300 transition-all"
            >
              <div className="flex items-center mb-3">
                <service.icon className="w-8 h-8 text-emerald-700 mr-3" />
                <h3 className="text-xl font-bold text-emerald-900">
                  {service.label}
                </h3>
              </div>
              <p className="text-slate-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
