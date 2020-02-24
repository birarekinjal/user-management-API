// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
//const index = require('./index');

require("@babel/register")({
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true
      }
    ]
  ],
  presets: ["@babel/preset-env", "@babel/preset-react"]
});

//    presets: ["@babel/preset-env"]
// Import the rest of our application.
//module.exports = { entry: ['@babel/polyfill','./index.js']}

module.exports = require("./index.js");
// Import the rest of our application.
//module.exports = { entry: ['@babel/', index]}
//module.exports = require('./index.js')
