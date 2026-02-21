import { Link } from 'react-router';
import { ArrowRight, ThumbsUp } from 'lucide-react';
import SectionTitle from '../../../components/ui/SectionTitle';
import { testimonials } from '../../../data/testimonials';

export default function TestimonialsPreview() {
  const previewVoices = testimonials.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle subtitle="築20年前後の屋根、同じ悩みを持つ方が選んでいます">
          お客様の声
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {previewVoices.map((voice, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-3 shrink-0">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-emerald-900 text-sm">
                    {voice.area} / {voice.age}
                  </p>
                  <p className="text-xs text-orange-600 font-bold">
                    {voice.work}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 text-sm line-clamp-4">{voice.q4}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/voice"
            className="inline-flex items-center font-bold text-emerald-700 hover:text-emerald-900 text-lg transition-colors"
          >
            お客様の声をもっと見る <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
