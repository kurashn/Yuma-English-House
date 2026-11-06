import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CTA_LABEL, LINE_URL } from '@/lib/site';

const StickyBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-0">
      {/* Mobile Design: Floating Card */}
      <div className="md:hidden">
        <a
          href={LINE_URL}
          data-cta="sticky"
          className="block relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden border-2 border-green-500 animate-bounce-subtle"
        >
          <div className="flex items-center p-3 gap-3">
            <div className="bg-green-500 text-white p-3 rounded-full shrink-0 shadow-md motion-safe:animate-pulse">
              <MessageCircle size={28} fill="currentColor" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-orange-700 mb-0.5">＼ LINE登録で特典3つプレゼント ／</div>
              <div className="text-base font-bold text-gray-900 leading-tight">
                <span className="text-green-700">LINE</span>で無料相談する
              </div>
            </div>
            <div className="bg-gray-100 p-2 rounded-full">
              <div className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-full text-white text-xs font-bold">
                &gt;
              </div>
            </div>
          </div>
          {/* Shimmer effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
        </a>
      </div>

      {/* Desktop Design: Full Width Bar */}
      <div className="hidden md:block bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] py-4">
        <div className="container mx-auto px-4 flex items-center justify-center gap-8">
          <p className="text-lg font-bold text-gray-800">
            富士市の小中高生向け英検対策 Yuma English House。
            <span className="text-green-700">公式LINE</span>で無料相談・登録で
            <span className="text-orange-700">特典3つ</span>
            をプレゼント
          </p>
          <a
            href={LINE_URL}
            data-cta="sticky"
            className="group relative bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3 overflow-hidden shrink-0"
          >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            <span>{CTA_LABEL}</span>
            {/* Button Shimmer */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
