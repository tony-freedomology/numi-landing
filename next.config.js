const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/numi-landing',
  turbopack: {
    root: __dirname,
  },
}
module.exports = nextConfig
