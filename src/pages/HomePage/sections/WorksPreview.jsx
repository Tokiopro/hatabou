import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../../../components/ui/SectionTitle';
import Card from '../../../components/ui/Card';
import { works } from '../../../data/works';

export default function WorksPreview() {
  const previewWorks = works.slice(0, 3);

  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle subtitle="福井県内での実績を一部ご紹介します">
          施工事例
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {previewWorks.map((work, i) => (
            <Card key={i} className="overflow-hidden p-0">
              <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-500 font-bold relative">
                <div className="absolute top-2 left-2 bg-emerald-600 text-white px-3 py-1 text-xs font-bold rounded shadow-sm">
                  {work.work}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">
                  {work.area} / {work.age}
                </h3>
                <p className="text-sm text-slate-600 mb-1">
                  <span className="font-bold text-emerald-800">工期:</span>{' '}
                  {work.duration}
                </p>
                <p className="text-lg font-bold text-orange-600">
                  {work.price}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/works"
            className="inline-flex items-center font-bold text-emerald-700 hover:text-emerald-900 text-lg transition-colors"
          >
            施工事例をもっと見る <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
