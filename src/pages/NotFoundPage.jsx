import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="animate-fade-in pt-20 min-h-[80vh] flex items-center justify-center px-4">
      <SEO title="ページが見つかりません" />
      <div className="text-center max-w-lg">
        <div className="text-8xl font-extrabold text-emerald-200 mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">
          ページが見つかりません
        </h1>
        <p className="text-slate-600 mb-8">
          お探しのページは移動または削除された可能性があります。
          URLをお確かめの上、再度お試しください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" icon={Home}>
            ホームに戻る
          </Button>
          <Button href="/contact" variant="outline" icon={ArrowLeft}>
            お問い合わせ
          </Button>
        </div>
      </div>
    </div>
  );
}
