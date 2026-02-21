import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="パンくずリスト" className="bg-slate-100 border-b border-slate-200">
      <div className="container mx-auto max-w-4xl px-4 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-600">
          <li>
            <Link to="/" className="hover:text-emerald-700 transition-colors">
              ホーム
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {i === items.length - 1 ? (
                <span className="text-slate-800 font-medium">{item.label}</span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-emerald-700 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
