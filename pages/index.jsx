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
    const validUrls = lines.filter(line => /.+?\..+/.test(line.trim()));
    if (validUrls.length === 0) return alert('No valid URLs');

    setLoading(true);
    const newResults = [];

    for (const url of validUrls) {
      try {
        const response = await fetch(` https://cors.eu.org/ ${url}`);
        const html = await response.text();
        // Process HTML here
        newResults.push({
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

    setResults(newResults);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Web Scraper with AI Analysis</h1>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            Enter URLs below and extract emails, phone numbers, locations, and more.
          </p>
        </section>

        <PricingPlans />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12">
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-lg p-6