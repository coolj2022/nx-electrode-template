// This config file is loaded if NODE_ENV is "development" or unset
// It will be merged into the config from default.js

export default {
  ui: {
    googleAnalytics: {
      measurementId: 'G-FAKEID777',
      scriptUrl: 'https://www.googletagmanager.com/gtag/js?id=',
    },
    ENV: 'dev',
    firebaseConfig: {
      apiKey: 'API_KEY',
      authDomain: 'AUTH_DOMAIN',
      projectId: 'nx-electrode-app',
      storageBucket: '',
      messagingSenderId: 'MESSAGING_SENDER_ID',
      appId: 'APP_ID',
      measurementId: '',
    },
  },
};
