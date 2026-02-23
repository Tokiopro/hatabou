import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { navItems, secondaryNavItems } from '../data/navigation';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function Header({ currentPath = '/' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrolled = useScrollPosition();

  const closeMenu = () => setIsMobileMenuOpen(false);

  const allNavItems = [...navItems, ...secondaryNavItems];

  const isActive = (path) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center group" onClick={closeMenu}>
          <img src="/logo.webp" alt="建築鈑金はた" width="56" height="56" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-emerald-600 group-hover:shadow-lg transition-all shadow-md shrink-0 mr-3" />
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs font-bold text-emerald-600 tracking-wider mb-0.5">
              福井の屋根・外壁・雨樋リフォーム
            </span>
            <span className="text-xl md:text-2xl font-extrabold text-emerald-900 tracking-tight group-hover:text-emerald-700 transition-colors">
              建築鈑金はた
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`font-bold transition-colors ${
                isActive(item.path)
                  ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                  : 'text-slate-700 hover:text-emerald-600'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col items-end border-l-2 border-slate-200 pl-6 ml-2">
            <span className="text-xs font-bold text-slate-500 mb-1">
              お見積り・点検無料
            </span>
            <a
              href="/contact"
              className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full flex items-center hover:bg-orange-600 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" /> お問い合わせ
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-emerald-900 hover:bg-emerald-50 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col">
          {allNavItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={closeMenu}
              className="text-left py-4 px-6 border-b border-slate-100 font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={closeMenu}
            className="py-4 px-6 text-left font-bold text-orange-600 bg-orange-50 flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" /> 無料点検・お問い合わせ
          </a>
        </div>
      )}
    </header>
  );
}
