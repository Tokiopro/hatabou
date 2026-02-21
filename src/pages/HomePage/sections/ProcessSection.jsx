import SectionTitle from '../../../components/ui/SectionTitle';
import { processSteps } from '../../../data/processSteps';

export default function ProcessSection() {
  return (
    <section className="py-20 bg-slate-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle subtitle="安心でスムーズな対応をお約束します">
          お問い合わせから工事完了までの流れ
        </SectionTitle>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-emerald-200">
          {processSteps.map((item, i) => (
            <div
              key={i}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                {item.step}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:border-emerald-200 transition-colors">
                <h4 className="text-xl font-bold text-emerald-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
