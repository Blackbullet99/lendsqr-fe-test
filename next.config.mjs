/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
