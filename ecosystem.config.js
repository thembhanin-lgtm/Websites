module.exports = {
  apps: [
    {
      name: 'my-free-shop',
      script: './server.js',
      instances: 'max',
      env: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    }
  ]
};
