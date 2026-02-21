import { Link } from 'react-router';
import { MessageCircle, Phone } from 'lucide-react';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 lg:hidden flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <Link
        to="/contact"
        className="flex-1 bg-line-green text-white py-3 flex flex-col items-center justify-center font-bold text-xs"
      >
        <MessageCircle className="w-6 h-6 mb-1" />
        LINE相談
      </Link>
      <a
        href="tel:000-000-0000"
        className="flex-1 bg-orange-500 text-white py-3 flex flex-col items-center justify-center font-bold text-xs"
      >
        <Phone className="w-6 h-6 mb-1" />
        電話する
      </a>
    </div>
  );
}
