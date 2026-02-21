import { Link } from 'react-router';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import Button from './Button';

export default function CTABanner({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 md:p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-4">
          まずはお気軽にご相談ください
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            href="tel:000-000-0000"
            icon={Phone}
            className="text-lg py-3 px-8"
          >
            000-000-0000
          </Button>
          <Button
            variant="line"
            href="/contact"
            icon={MessageCircle}
            className="text-lg py-3 px-8"
          >
            LINEで相談
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-orange-500">
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
            まずは、お気軽にご相談ください
          </h3>
          <p className="text-lg text-slate-700 mb-10">
            「ちょっと見てもらうだけ」「見積もりだけ」でも大歓迎です。
            <br />
            福井県内の皆様の住まいを、適正価格でしっかりお守りします。
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button
              href="tel:000-000-0000"
              icon={Phone}
              className="w-full md:w-auto text-xl py-5 px-10 shadow-orange-500/50"
            >
              000-000-0000
              <br />
              <span className="text-sm font-normal">
                （営業時間 8:00〜18:00 日祝休）
              </span>
            </Button>
            <Button
              variant="line"
              href="/contact"
              icon={MessageCircle}
              className="w-full md:w-auto text-xl py-5 px-10"
            >
              LINEで写真を送る
              <br />
              <span className="text-sm font-normal">（24時間受付中）</span>
            </Button>
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="text-emerald-700 font-bold underline hover:text-emerald-900 inline-flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" /> メール・見積フォームはこちら
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
