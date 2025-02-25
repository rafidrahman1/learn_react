const env = {
  facebook: {
    appId: process.env.REACT_APP_FACEBOOK_APP_ID,
    appSecret: process.env.REACT_APP_FACEBOOK_APP_SECRET,
    apiVersion: process.env.REACT_APP_FACEBOOK_API_VERSION || 'v18.0',
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'https://graph.facebook.com',
  },
  environment: process.env.REACT_APP_ENV || 'development',
  debug: process.env.REACT_APP_DEBUG === 'true',
};

// Validation function to ensure required environment variables are set
const validateEnv = () => {
  const required = [
    'REACT_APP_FACEBOOK_APP_ID',
    'REACT_APP_FACEBOOK_APP_SECRET',
  ];

  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env file and ensure all required variables are set.'
    );
  }
};

// Run validation in development mode
if (env.environment === 'development') {
  validateEnv();
}

export default env;