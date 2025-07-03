import { useState } from 'react';
import Header from '../components/Header';
import EmptyState from '../components/EmptyState';
import PricingPlans from '../components/PricingPlans';
import ResultCard from '../components/ResultCard';

export default function Home() {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleExtract = async () => {
    const lines = urls.trim().split('\n');
    const validUrls = lines.filter(url => url.includes('.'));
    if (validUrls.length === 0) return alert("No valid URLs");

    setLoading(true);
    const scrapedResults = [];

    for (const url of validUrls) {
      try {
        // Simulate processing
        scrapedResults.push({
          url,
          name: 'Company Name',
          emails: ['contact@example.com'],
          phoneNumbers: ['+966500000000'],
          whatsappNumbers: [],
          locations: ['Riyadh']
        });
      } catch (err) {
        console.error(err);
      }
    }

    setResults(scrapedResults);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <section className="text-center py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Web Scraper with AI Analysis</h1>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Enter URLs below and extract emails, phone numbers, locations, and more.
          </p>
        </section>

        <PricingPlans />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12">
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-white mb-4">Enter URLs to Scan</h2>
              <textarea
                value={urls}
                onChange={(e) => setUrls(e.target.value)}
                rows="10"
                placeholder=" https://example.com &#10;anotherexample.org"
                className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-green-500 text-sm text-slate-300"
              />
              <button
                onClick={handleExtract}
                disabled={loading}
                className="w-full mt-4 flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <span>{loading ? 'Extracting...' : 'Extract Information'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            {results.length === 0 ?