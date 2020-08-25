// 首先需要引入http模块
var http = require('http')

// 创建一个server服务器
var server = http.createServer()

// request请求事件处理函数，接收两个参数
// request 请求对象：可以获取客户端的一些请求信息，例如请求路径
// response 响应对象：可以给客户端发送响应消息
server.on('request', function (request, response) {
  console.log(`响应了：${request.url}`)

  // 不同的请求地址响应不同的内容
  // if (request.url == '/') {
  //   response.end('index page')
  // } else if (request.url == '/road') {
  //   response.end('road page')
  // } else {
  //   response.end('404')
  // }

  if (request.url == '/goods') {
    var goodslist = [
      {
        name: '名字1',
        id: 1
      },
      {
        name: '名字2',
        id: 2
      },
      {
        name: '名字3',
        id: 3
      }
    ]
    // response.end(goodslist)  报错  只接收字符串
    response.end(JSON.stringify(goodslist))
  } else {
    response.end('404')
  }
})

// 设置端口
server.listen(3000, '127.0.0.1', function () {
  console.log('打开浏览器访问页面吧')
})
