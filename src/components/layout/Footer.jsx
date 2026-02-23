import { Link } from 'react-router';
import { MapPin, Clock, ChevronRight } from 'lucide-react';
import { navItems, secondaryNavItems } from '../../data/navigation';
import { areas } from '../../data/areas';

export default function Footer() {
  const allNavItems = [...navItems, ...secondaryNavItems];

  return (
    <footer className="bg-emerald-950 text-slate-300 py-12 px-4 border-t-4 border-orange-500">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <img src="/ロゴ.png" alt="建築鈑金はた" className="w-10 h-10 rounded-full object-cover border border-emerald-600 shrink-0 mr-3" />
            <h2 className="text-2xl font-bold text-white">建築鈑金はた</h2>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            福井県を中心に、屋根・外壁・雨樋のリフォームを行っています。
            築15～30年のコロニアル屋根の「C/guardカバー工法」に強みを持っています。
          </p>
          <div className="flex items-center mt-4 text-slate-300">
            <MapPin className="w-5 h-5 mr-2 text-emerald-500" />
            <span>福井県〇〇市〇〇町0-0-0</span>
          </div>
          <div className="flex items-center mt-2 text-slate-300">
            <Clock className="w-5 h-5 mr-2 text-emerald-500" />
            <span>営業時間 8:00〜18:00 (日祝休)</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4 border-b border-emerald-800 pb-2">
            メニュー
          </h3>
          <ul className="space-y-3">
            {allNavItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="hover:text-white transition-colors flex items-center text-sm"
                >
                  <ChevronRight className="w-4 h-4 mr-1 text-emerald-500" />{' '}
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors flex items-center text-sm"
              >
                <ChevronRight className="w-4 h-4 mr-1 text-emerald-500" />{' '}
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4 border-b border-emerald-800 pb-2">
            対応エリア
          </h3>
          <ul className="space-y-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link
                  to={`/area/${area.slug}`}
                  className="hover:text-white transition-colors flex items-center text-sm"
                >
                  <ChevronRight className="w-4 h-4 mr-1 text-emerald-500" />{' '}
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-emerald-500 mt-3">
            ※エリア外の場合もお気軽にご相談ください。
          </p>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-emerald-900 text-sm text-slate-500">
        &copy; {new Date().getFullYear()} 建築鈑金はた All Rights Reserved.
      </div>
    </footer>
  );
}
