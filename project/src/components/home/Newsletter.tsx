import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    // In a real app, you would send this to your API
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to get special offers, free giveaways, and exclusive deals.
          </p>
          
          {isSubmitted ? (
            <div className="bg-emerald-600/20 border border-emerald-500 rounded-lg p-4 text-emerald-300">
              <p>Thank you for subscribing! We've sent a confirmation to your email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto">
              <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-grow bg-gray-800 border ${
                    error ? 'border-red-500' : 'border-gray-700'
                  } rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-full transition-colors inline-flex items-center justify-center"
                >
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              <p className="text-gray-400 text-xs mt-4">
                By subscribing, you agree to our privacy policy and consent to receive marketing emails.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;