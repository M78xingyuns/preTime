module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "semi": 0, //可以不使用分号
      "no-unused-vars": 0, // 可以有声明后未被使用的变量或参数
      "no-multi-spaces": 0, // 能用多余的空格 
  },
  parserOptions: {
      parser: "babel-eslint"
  }
}