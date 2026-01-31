/** @type {import('next').NextConfig} */
const nextConfig = {

images:{domains: ["images.remotePatterns", "https://tomaslonnblad.github.io/",
// images.unsplash.com
]},
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/default",
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
