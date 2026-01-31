/** @type {import('next').NextConfig} */
const nextConfig = {

images:{domains: ["images.remotePatterns", "https://tomaslonnblad.github.io/2.jpg",
// images.unsplash.com images.remotePatterns
]},


  images: {
    remotePatterns: [new URL('https://tomaslonnblad.github.io/2.jpg')],
  },




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
