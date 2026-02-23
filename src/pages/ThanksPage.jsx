import { CheckCircle, Home, Phone } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';

export default function ThanksPage() {
  return (
    <div className="animate-fade-in pt-20 min-h-[80vh] flex items-center justify-center px-4">
      <SEO title="送信完了" noindex />

      <div className="text-center max-w-lg">
        <CheckCircle className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">
          お問い合わせありがとうございます
        </h1>
        <p className="text-slate-600 mb-4 leading-relaxed">
          内容を確認のうえ、2営業日以内にご連絡いたします。
        </p>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          お急ぎの場合は、お電話（000-000-0000）でもお気軽にご連絡ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" icon={Home}>
            ホームに戻る
          </Button>
          <Button
            href="tel:000-000-0000"
            variant="outline"
            icon={Phone}
          >
            電話で相談
          </Button>
        </div>
      </div>
    </div>
  );
}
