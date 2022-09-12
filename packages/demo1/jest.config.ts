/* eslint-disable */
export default {
  displayName: 'demo1',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/demo1',
  tsJest: {
    tsconfig: {
      jsx: 'react-jsx', // *** HERE ***
    },
  },
};
