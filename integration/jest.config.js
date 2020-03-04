module.exports = {
  preset: 'jest-puppeteer',
      testRegex: './*\\.(test|spec)\\.js$',
      setupFiles: [
          "<rootDir>/jest.init.js"
      ],
  }