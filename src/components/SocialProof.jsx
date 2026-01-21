import React from 'react';

const SocialProof = () => {
    return (
        <section className="py-12 bg-[#0A0A0A] border-y border-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-[#8C8C8C] text-sm font-bold tracking-[0.2em] mb-10">
                    CONFÍAN EN DURÁ VENTURES
                </p>

                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <span className="text-2xl font-black text-white tracking-tighter">CLOSER•PROPOSALS</span>
                    <span className="text-2xl font-black text-white tracking-tighter italic">IA FEROZ</span>
                    <span className="text-2xl font-black text-white tracking-tighter">CLIENTE 1</span>
                    <span className="text-2xl font-black text-white tracking-tighter italic">CLIENTE 2</span>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
