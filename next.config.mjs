/** @type {import('next').NextConfig} */

const nextConfig = {
  rewrites: () => {
    return [
      {
        source: "/backend/:path*",
        destination: "http://localhost:1650/:path*",
      },
    ];
  },
};

export default nextConfig;
