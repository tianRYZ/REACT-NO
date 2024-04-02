const express = require("express");
const app = express();
const router = require("./router")
const cors = require("cors");// 解决跨域
const bodyParser = require("body-parser");

/**
 * bodyParser 一个中间件 用于解析传入请求的请求体(request body) 并使其可以通过req.body访问
 * 
 */
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors())
app.use("/api", router)

app.listen(5577, () => {
  console.log("服务器运行在5566端口")
})