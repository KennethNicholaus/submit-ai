import React from 'react';

const clientsList = [
  'AETNA', 'Abbott', 'AIG', 'Atlas Air', 'Centene', 'Citibank', 'Daimler Truck',
  'Deltek', 'Diageo', 'Experis', 'Geophysical Institute', 'Hartford Insurance',
  'Integrys Energy', 'J&J', 'JP Morgan', 'Merck', 'Molson Coors', 'Nordstrom',
  'Novartis', 'PWC consulting', 'Pfizer', 'Peoples Gas', 'Prudential',
  'SS&C Technologies', 'Samsung', 'TAP Pharma', 'Takeda', 'Unilever',
  'Vanguard Group', 'Woods Hole Oceanographic', 'Wright Medical', 'Yahoo'
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-gray-900/70 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Trusted By Industry Leaders</h2>
          <p className="text-gray-400 mt-2">We partner with Fortune 500 companies and innovative startups.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
            {clientsList.map((client, index) => (
              <div key={index} className="text-gray-400 text-lg font-medium opacity-80 hover:opacity-100 transition-opacity">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;