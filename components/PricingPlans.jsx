export default function PricingPlans() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Starter */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-white mb-2">Starter</h2>
          <ul className="text-sm text-slate-400 space-y-2 mb-6">
            <li>✔️ Up to 5 URLs</li>
            <li>✔️ Basic contact extraction</li>
            <li>✔️ CSV export</li>
          </ul>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition">
            Free Tier
          </button>
        </div>

        {/* Pro */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-white mb-2">Pro</h2>
          <ul className="text-sm text-slate-400 space-y-2 mb-6">
            <li>✔️ Up to 50 URLs</li>
            <li>✔️ Advanced contact extraction</li>
            <li>✔️ AI Profile Generation</li>
            <li>✔️ Priority Support</li>
          </ul>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition">
            $19/month
          </button>
        </div>

        {/* Advanced */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-white mb-2">Advanced</h2>
          <ul className="text-sm text-slate-400 space-y-2 mb-6">
            <li>✔️ Unlimited URLs</li>
            <li>✔️ Full API access</li>
            <li>✔️ Custom integrations</li>
            <li>✔️ Dedicated support</li>
          </ul>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-medium transition">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}