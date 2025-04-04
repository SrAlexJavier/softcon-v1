import { Link } from '@inertiajs/react';
import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-[600px] w-full">
            <div className="absolute inset-0">
                <img
                    src="/portada-03.png"
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                <h1 className="text-5xl font-bold mb-4">Welcome to SOFTCON</h1>
                <p className="text-xl mb-8 text-center max-w-2xl">
                    Your trusted partner in software solutions. We transform ideas into powerful digital experiences.
                </p>
                <Link href="/get-started" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
                Get Started
                </Link>

            </div>
        </div>
    );
};

export default Hero;
