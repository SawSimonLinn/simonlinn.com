"use client";

import { useState, useEffect } from 'react';

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="w-full py-6 text-center font-arcade text-[10px] text-pixel/60">
            <p className="animate-blink">© {year} Simonlinn.com — Built with Next.js + Tailwind. Insert Coin to Continue.</p>
        </footer>
    );
}
