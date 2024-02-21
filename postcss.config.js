module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 192,
      propList: ["*"],
      minPixelValue: 2,
      selectorBlackList: ["html", "body", "lang-max", "mit", "width-icon", "el-sub-menu__icon-arrow", "el-menu--horizontal", "el-switch", "el-checkbox", "el-message"]
    },
  }
}