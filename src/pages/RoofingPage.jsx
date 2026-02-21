import { Wrench, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function RoofingPage() {
  return (
    <div className="animate-fade-in pt-20">
      <div className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          屋根リフォーム（C/guard工法）
        </h1>
        <p className="text-xl text-emerald-100">
          築15～30年のコロニアル屋根に最適な、賢いリフォーム術
        </p>
      </div>

      <div className="container mx-auto max-w-4xl py-16 px-4 space-y-16">
        <section>
          <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center border-b-2 border-orange-500 pb-2 inline-block">
            葺き替えの前に、知ってほしいこと
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              「屋根が傷んできたから、全部剥がしてやり直さないと…」と思っていませんか？
              <br />
              実は、下地の傷みが激しくない場合、古い屋根をそのまま残して上から新しい屋根材をかぶせる
              <strong>「カバー工法（C/guard）」</strong>
              という選択肢があります。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-3 text-center">
                  従来の葺き替え
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li>・既存屋根の解体費用がかかる</li>
                  <li>・廃材の処分費用が高い</li>
                  <li>・アスベスト飛散のリスクがある</li>
                  <li>・工期が長く、生活に負担がかかる</li>
                </ul>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                <h3 className="text-xl font-bold text-emerald-800 mb-3 text-center">
                  C/guardカバー工法
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="font-bold text-orange-600">
                    ・解体・処分費を大幅カット！
                  </li>
                  <li className="font-bold text-orange-600">
                    ・古い屋根を密閉しアスベスト対策にも！
                  </li>
                  <li className="font-bold text-orange-600">
                    ・工期が短く、住みながら工事完了！
                  </li>
                  <li className="font-bold text-orange-600">
                    ・二重屋根になるため断熱性・遮音性UP！
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center">
            C/guardが向かないケース（誠実なご案内）
          </h2>
          <p className="text-center text-slate-600 mb-8">
            当店では、無理にカバー工法をおすすめすることはありません。以下の場合は葺き替えをご提案します。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-50 border-t-4 border-t-slate-400">
              <h3 className="font-bold text-lg mb-2">
                1. 雨漏りが重度の場合
              </h3>
              <p className="text-slate-600 text-sm">
                下地の木材（野地板）まで腐食している場合は、上からかぶせても屋根を支えきれないため、下地からのやり直しが必要です。
              </p>
            </Card>
            <Card className="bg-slate-50 border-t-4 border-t-slate-400">
              <h3 className="font-bold text-lg mb-2">
                2. 屋根が重い瓦屋根の場合
              </h3>
              <p className="text-slate-600 text-sm">
                日本瓦などの重い屋根材の上にさらに屋根をかぶせると、耐震性に悪影響が出るため、原則としてコロニアル（スレート）屋根が対象です。
              </p>
            </Card>
            <Card className="bg-slate-50 border-t-4 border-t-slate-400">
              <h3 className="font-bold text-lg mb-2">
                3. 過去にカバー工法をしている
              </h3>
              <p className="text-slate-600 text-sm">
                すでに一度カバー工法を行っている屋根（三重屋根になる場合）は重量や構造上の問題でお受けできません。
              </p>
            </Card>
          </div>
        </section>

        <div className="text-center bg-emerald-50 p-10 rounded-xl border border-emerald-200 shadow-sm">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">
            「我が家はC/guardで直せる？」と思ったら
          </h3>
          <p className="mb-6 text-slate-700">
            まずは無料の現地調査をご利用ください。屋根に上り（またはドローン等で）、正確な状態を診断します。
          </p>
          <Button href="/contact" className="text-xl px-10 py-4 shadow-lg">
            無料点検を申し込む
          </Button>
        </div>
      </div>
    </div>
  );
}
