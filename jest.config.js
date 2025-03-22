const path = require('path');

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    '^@components/(.*)$': path.resolve(__dirname, 'src/components/$1'), // Mapeo de rutas
  },
};