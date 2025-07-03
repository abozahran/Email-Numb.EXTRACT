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

      {/* Email Section */}
      {emails.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-slate-400">Emails</h3>
          <ul className="space-y-1 mt-1">
            {emails.map((email, i) => (
              <li key={i} className="text-sm text-slate-300">{email}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Phone Numbers */}
      {phoneNumbers.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-slate-400">Phone Numbers</h3>
          <ul className="space-y-1 mt-1">
            {phoneNumbers.map((num, i) => (
              <li key={i} className="text-sm text-slate-300">{num}</li>
            ))}
          </ul>
        </div>
      )}

      {/* WhatsApp Numbers */}
      {whatsappNumbers.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-slate-400">WhatsApp Numbers</h3>
          <ul className="space-y-1 mt-1">
            {whatsappNumbers.map((num, i) => (
              <li key={i} className="text-sm text-slate-300">{num}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Locations */}
      {locations.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-slate-400">Locations</h3>
          <ul className="space-y-1 mt-1">
            {locations.map((loc, i) => (
              <li key={i} className="text-sm text-slate-300">{loc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}