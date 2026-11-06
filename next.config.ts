import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Instagram / Facebook のリンク経由で「#teacher」の「#」が「%23」に置き換わり、
      // 「/%23teacher」という存在しないページ（404）になっていたため、トップへ戻す。
      // 2026年1〜8月に約100回発生（GA4）。
      { source: "/%23:rest(.*)", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
