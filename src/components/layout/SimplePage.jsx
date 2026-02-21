export default function SimplePage({ title, subtitle, children }) {
  return (
    <div className="animate-fade-in pt-20">
      <div className="bg-emerald-800 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-emerald-100">{subtitle}</p>}
      </div>
      <div className="container mx-auto max-w-4xl py-16 px-4">{children}</div>
    </div>
  );
}
