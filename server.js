// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.

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

module.exports = require("./index.js");
