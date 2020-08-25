var fs = require ('fs');

// fs.writeFile(filename,data,[options],callback)
// 参数说明：
//     filename String 文件名

//     data String|buffer

//     option Object
//         encoding String |nulldefault='utf-8'
//         mode Number default=438(aka 0666 in Octal)
//         flag Stringdefault='w'

//     callback Function

var fileRoad = './data/write.txt';
// var fileRoad = './data/write>|?.txt';  // 文件名不能包含一些特殊字符，如有则会报错
fs.writeFile (fileRoad, '写入的文件内容 就只这个 看能返回不', function (err) {
  if (err) throw err;
  console.log ('写了写了');

  // 写入之后 读取文件
  fs.readFile (fileRoad, function (err, data) {
    if (err) {
      throw err;
    } else {
      console.log (data.toString());
    }
  });
});
