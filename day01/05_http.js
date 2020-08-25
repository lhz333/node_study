// 首先需要引入http模块
var http = require('http')
// console.log(http)

// 创建一个server服务器
var server = http.createServer()
// console.log(server)

// 发送请求
server.on('request', function(){
  console.log('响应了吗')
})

// 设置端口
server.listen(3000, '127.0.0.1', function(){
  console.log("打开浏览器访问页面吧")
})