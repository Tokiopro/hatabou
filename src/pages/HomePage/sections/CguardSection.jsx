import { Wrench, CheckCircle } from 'lucide-react';
import SectionTitle from '../../../components/ui/SectionTitle';
import Card from '../../../components/ui/Card';

const benefits = [
  '葺き替えより費用を抑えやすい（約20%抑えられるケースも）',
  '解体時のホコリや騒音が少なく、ご近所への負担減',
  '古い屋根材（アスベスト含有の可能性）を飛散させない',
  '住みながらの工事が可能で、普段通りの生活ができます',
];

export default function CguardSection() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle subtitle="葺き替えなくても大丈夫な理由">
          費用と負担を抑える「C/guard工法」
        </SectionTitle>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-emerald-50 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-emerald-200 p-4 text-center">
              <Wrench className="w-16 h-16 text-emerald-400 mb-4" />
              <span className="text-emerald-700 font-bold mb-2">
                既存屋根にかぶせる工法の図解
              </span>
              <span className="text-emerald-600/70 text-sm">
                ※古い屋根を剥がさないため、廃材処分費や工期を大幅にカットできます
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">
              今の屋根を壊さず、上から新しい屋根をかぶせます
            </h3>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              C/guard（シーガード）は、既存のコロニアル屋根の上に専用の接着剤と工法で新しい屋根材をかぶせるリフォームです。廃材が出にくく、工期も短いため、お財布にも暮らしにも優しいのが特徴です。
            </p>
            <ul className="space-y-3">
              {benefits.map((text, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-500 mr-2 shrink-0" />
                  <span className="text-slate-800 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-emerald-50 p-8 md:p-12 rounded-2xl mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">
            建築鈑金はた が選ばれる3つの理由
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-emerald-800 mb-3 border-b border-emerald-100 pb-2">
                1. 鈑金職人の「雨仕舞い」技術
              </h4>
              <p className="text-slate-600">
                屋根はただかぶせるだけでなく、雨を適切に逃がす「雨仕舞い」が命です。建築鈑金専門の技術で、見えない部分も徹底的に施工します。
              </p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-emerald-800 mb-3 border-b border-emerald-100 pb-2">
                2. 屋根・外壁・雨樋の一括提案
              </h4>
              <p className="text-slate-600">
                屋根だけでなく外壁や雨樋もまとめて診断可能。足場を一度に組めるため、将来バラバラに工事するよりトータルコストを大幅に削減できます。
              </p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-emerald-800 mb-3 border-b border-emerald-100 pb-2">
                3. 地元福井の地域密着対応
              </h4>
              <p className="text-slate-600">
                福井県の気候（雪や雨）を熟知した施工。何かあればすぐに駆けつけられる距離感で、施工後のアフターフォローも万全です。
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
