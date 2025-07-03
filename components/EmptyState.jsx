export default function EmptyState() {
  return (
    <div className="text-center p-12 bg-slate-800 rounded-xl shadow-lg border-2 border-dashed border-slate-700">
      <svg className="mx-auto h-12 w-12 text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
      <h3 className="mt-4 text-xl font-semibold text-white">Ready to find some data?</h3>
      <p className="mt-2 text-slate-400">Paste your URLs on the left and click "Extract" to begin.</p>
    </div>
  );
}