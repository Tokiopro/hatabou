export default function ContactForm() {
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = '/thanks';
      }}
    >
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow"
          placeholder="例：福井 太郎"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          ご住所（市町まででOK） <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow"
          placeholder="例：福井市"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          電話番号 <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow"
          placeholder="例：090-0000-0000"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          希望連絡方法
        </label>
        <div className="flex gap-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="contact_method"
              className="mr-2 w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              defaultChecked
            />{' '}
            お電話
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="contact_method"
              className="mr-2 w-4 h-4 text-emerald-600 focus:ring-emerald-500"
            />{' '}
            メール
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">
          気になる箇所・症状
        </label>
        <textarea
          rows="4"
          className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow"
          placeholder="例：築20年で屋根のコケが気になります。見積もりをお願いします。"
        ></textarea>
      </div>
      <div className="text-center pt-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg bg-orange-500 text-white hover:bg-orange-600 px-6 py-4 text-lg w-full md:w-auto px-16 py-4 text-xl shadow-lg"
        >
          送信する
        </button>
      </div>
    </form>
  );
}
