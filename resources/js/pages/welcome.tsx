import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import AppearanceTabs from '@/components/appearance-tabs';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <header className="flex items-center justify-between py-4 px-4 bg-gray-800 fixed top-0 left-0 w-full z-50 shadow-md">
                <div className="flex items-center gap-4">
                    <img src="/softcon-logo-icon.png" alt="Logo" className="h-10" />
                </div>
                <div className="flex items-center gap-4 ">
                    {/* <AppearanceTabs /> */}
                </div>
            </header>

            <main>
                <Hero />
                <Features />
            </main>

            <footer className="flex justify-between py-8 text-center bg-gray-100 dark:bg-gray-900">
                <div className="mx-4 flex items-center gap-4 ">
                    <p>&copy; 2025 SOFTCON. All rights reserved.</p>
                </div>

                <div className="flex items-center gap-4 ">
                    <AppearanceTabs />
                </div>
            </footer>
        </>
    );
}
