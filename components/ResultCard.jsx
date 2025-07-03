export default function ResultCard({ resultData }) {
  const { url, name, emails, phoneNumbers, whatsappNumbers, locations } = resultData;

  return (
    <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-[1.01]">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">{name || 'Name not found'}</h2>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline break-all">{url}</a>
        </div>
      </div>

      {/* Add sections for emails, phones, etc. */}
    </div>
  );
}