import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false, 

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // 1. Anti-Clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          
          // 2. Prevent MIME Sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          
          // 3. Privacy & Referrers
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          
          // 4. Force HTTPS (2 Years + Preload)
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          
          // 5. The "Iron Dome" (Permissions Policy) - CRITICAL FOR A+
          { 
            key: 'Permissions-Policy', 
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), usb=()' 
          },

          // 6. Content Security Policy (Optimized for Next.js)
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;