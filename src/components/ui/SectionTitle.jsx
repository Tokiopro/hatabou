export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">{children}</h2>
      {subtitle && <p className="text-lg text-emerald-700 font-medium">{subtitle}</p>}
      <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
    </div>
  );
}
