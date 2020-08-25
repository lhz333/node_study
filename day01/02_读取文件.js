// fs即 file-system
var fs = require ('fs');

// console.log(fs)

// readFile()方法 --> 异步读取文件
// 用法：错误优先机制，回调函数的第一个参数为错误信息
// 其中data获得的是文件内容的buffer（二进制）数据，想获得原字符串内容就要加toString()方法
fs.readFile ('./data/hello.txt', function (err, data) {
  if (err) console.log (err); // 当文件读取失败时，err会返回错误对象；文件读取成功时，err返回null
  console.log (data); // 二进制文件
  console.log (data.toString ()); // hello node.js
});
