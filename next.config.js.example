module.exports = {
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false,net:false,tls:false };
      return config;
    },
    env: {
      APP_URL: 'http://localhost:3000/api',
    },
  };