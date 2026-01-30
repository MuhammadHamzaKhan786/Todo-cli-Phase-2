// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['better-auth'],
  /* Environment variables are now handled automatically from .env files,
     no need for the env property which is deprecated */
}

module.exports = nextConfig