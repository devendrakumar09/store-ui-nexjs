

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: '../../../assets/dashboard/products.svg',
  },
}
 
module.exports = nextConfig