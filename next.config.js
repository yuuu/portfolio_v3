/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "files.speakerdeck.com",
      "portfoliov32d439ad14dba4a4c80dff6b447fdbd03162006-dev.s3.ap-northeast-1.amazonaws.com",
      "qiita-user-contents.imgix.net",
      "tech.fusic.co.jp",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
