import { Phone, MessageCircle, Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SEO from '../components/seo/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import { createBreadcrumbList } from '../utils/structuredData';

export default function ContactPage() {
  const bcItems = [{ label: 'お問い合わせ・無料見積り' }];
  const jsonLd = createBreadcrumbList([{ label: 'ホーム', path: '/' }, ...bcItems]);

  return (
    <div className="animate-fade-in pt-20">
      <SEO
        title="お問い合わせ・無料見積り"
        description="建築鈑金はたへのお問い合わせ・無料見積りはこちら。電話・LINE・メールフォームで24時間受付中。相見積もり歓迎、しつこい営業はいたしません。"
        jsonLd={jsonLd}
      />
      <div className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          お問い合わせ・無料見積り
        </h1>
        <p className="text-xl text-emerald-100">
          相見積もり歓迎。しつこい営業はいたしません。
        </p>
      </div>
      <Breadcrumb items={bcItems} />

      <div className="container mx-auto max-w-4xl py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a href="tel:000-000-0000" className="block">
            <Card className="text-center border-t-8 border-t-orange-500 hover:shadow-xl transition-shadow cursor-pointer h-full">
              <Phone className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                お電話でのご相談
              </h2>
              <p className="text-slate-600 mb-4">
                お急ぎの方、直接話したい方はこちら
              </p>
              <div className="text-4xl font-extrabold text-orange-600 mb-2 tracking-wider">
                000-000-0000
              </div>
              <p className="text-sm text-slate-500">
                営業時間 8:00〜18:00 (日祝休)
              </p>
            </Card>
          </a>

          <Card className="text-center border-t-8 border-t-line-green hover:shadow-xl transition-shadow cursor-pointer">
            <MessageCircle className="w-16 h-16 text-line-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              LINEで写真相談
            </h2>
            <p className="text-slate-600 mb-4">
              スマホで屋根の写真を送るだけで簡易診断！
            </p>
            <Button
              variant="line"
              className="w-full text-xl py-4 shadow-line-green/50"
            >
              友だち追加して相談
            </Button>
            <p className="text-sm text-slate-500 mt-2">24時間受付中</p>
          </Card>
        </div>

        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center">
            <Mail className="mr-2" /> メールフォーム（24時間受付）
          </h2>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('デモ画面のため送信されません');
            }}
          >
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow"
                placeholder="例：福井 太郎"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                ご住所（市町まででOK） <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow"
                placeholder="例：福井市"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow"
                placeholder="例：090-0000-0000"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                希望連絡方法
              </label>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="contact_method"
                    className="mr-2 w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    defaultChecked
                  />{' '}
                  お電話
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="contact_method"
                    className="mr-2 w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                  />{' '}
                  メール
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                気になる箇所・症状
              </label>
              <textarea
                rows="4"
                className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow"
                placeholder="例：築20年で屋根のコケが気になります。見積もりをお願いします。"
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <Button
                type="submit"
                className="w-full md:w-auto px-16 py-4 text-xl shadow-lg"
              >
                送信する
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
