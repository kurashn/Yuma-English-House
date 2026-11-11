"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import { CTA_LABEL, LINE_URL } from "@/lib/site";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { label: "選ばれる理由", href: "#reason" },
        { label: "速読", href: "#sokudoku" },
        { label: "保護者様の声", href: "#voice" },
        { label: "講師紹介", href: "#teacher" },
        { label: "教室・料金", href: "#info" },
        { label: "流れ", href: "#flow" },
        { label: "よくある質問", href: "#faq" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <Link href="/" className="py-2 font-bold text-xl md:text-2xl text-primary tracking-tight hover:opacity-80 transition-opacity">
                    Yuma English House
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href={LINE_URL}
                        data-cta="header"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all shadow-md hover:shadow-lg"
                    >
                        <MessageCircle size={20} />
                        {CTA_LABEL}
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden flex items-center justify-center w-12 h-12 text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer relative z-50"
                    aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeMenu}
                            className="block py-2 text-lg font-medium text-gray-700 hover:text-gray-900 border-b border-gray-50"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href={LINE_URL}
                        data-cta="menu"
                        onClick={closeMenu}
                        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all shadow-md mt-2"
                    >
                        <MessageCircle size={20} />
                        {CTA_LABEL}
                    </a>
                </div>
            )}
        </header>
    );
}
