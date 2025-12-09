import React from 'react';
import { MessageCircle, X } from 'lucide-react';

const StickyBanner = () => {
  // Placeholder for close functionality if needed, though usually for conversion banners we want them persistent or dismissible for session.
  // For now, we'll keep it simple and persistent as per "click rateめちゃくちゃ上がるように" (maximize click rate).

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-0">
      {/* Mobile Design: Floating Card */}
      <div className="md:hidden">
        <a
          href="https://lin.ee/LF8WT5R"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden border-2 border-green-500 animate-bounce-subtle"
        >
          <div className="flex items-center p-3 gap-3">
            <div className="bg-green-500 text-white p-3 rounded-full shrink-0 shadow-md animate-pulse">
              <MessageCircle size={28} fill="currentColor" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-orange-500 mb-0.5">＼ 今だけ！3大特典プレゼント ／</div>
              <div className="text-sm font-bold text-gray-900 leading-tight">
                <span className="text-green-600">LINE登録</span>で合格の秘訣をGET
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
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full font-bold text-sm animate-pulse">
              期間限定
            </div>
            <p className="text-lg font-bold text-gray-800">
              小中高生の英検対策ならYuma English House。
              <span className="text-green-600">公式LINE登録</span>で
              <span className="text-orange-500">「合格3大特典」</span>
              を無料プレゼント中！
            </p>
          </div>
          <a
            href="https://lin.ee/LF8WT5R"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
          >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            <span>今すぐ特典を受け取る</span>
            {/* Button Shimmer */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
