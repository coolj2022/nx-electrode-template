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
      apiKey: 'AIzaSyDK5nMTdzW9oxq9v7la5QRcbbKz0ovXTss',
      authDomain: 'me-at-homeoffice.firebaseapp.com',
      projectId: 'me-at-homeoffice',
      storageBucket: 'me-at-homeoffice.appspot.com',
      messagingSenderId: '398390182326',
      appId: '1:398390182326:web:1234367861588a795a8117',
      measurementId: 'G-SYBTEWFENE',
    },
  },
};
