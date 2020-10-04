module.exports = {
  presets: [
    "@babel/typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        cwd: __dirname,
        root: ["./"],
        alias: {},
      },
    ],
  ],
};
