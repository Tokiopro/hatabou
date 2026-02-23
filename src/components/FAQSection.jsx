import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between gap-4"
      >
        <span className="font-bold text-slate-800">Q. {q}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-slate-50 border-t border-slate-200">
          <p className="text-slate-700 pt-4 pl-2 border-l-4 border-orange-400">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection({ title = 'よくある質問', items }) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}
