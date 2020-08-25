// 首先需要引入http模块
var http = require('http')
// console.log(http)

// 创建一个server服务器
var server = http.createServer()
// console.log(server)

// request请求事件处理函数，接收两个参数
// request 请求对象：可以获取客户端的一些请求信息，例如请求路径
// response 响应对象：可以给客户端发送响应消息
server.on('request', function(request, response){
  console.log(`响应了：${request.url}`)

  // write方法用来给客户端发送响应消息
  // write可以使用多次，但最后要使用end结束，不然客户端会一直等待
  response.write('hello node.js')
  response.end()
})

// 设置端口
server.listen(3000, '127.0.0.1', function(){
  console.log("打开浏览器访问页面吧")
})