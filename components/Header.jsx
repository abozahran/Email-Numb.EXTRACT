export default function Header() {
  return (
    <header className="bg-slate-900/70 backdrop-blur-sm shadow-sm sticky top-0 z-10 border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10l.01.01" />
            </svg>
            <span>Web Data Extractor</span>
          </h1>
        </div>
      </div>
    </header>
  );
}