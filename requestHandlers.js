/*
文件上传
1. 尽管在node.js 中处理基础的POST请求相对比较简单, 但依然可以学到许多.
2.用Node.js来处理文件上传( multipart POST请求)是比较复杂的,在此借助外部模块实现.

处理post请求
*/

function start(res){
  console.log("Request handler 'start' was called.", res);
  res.end("Hello world!");
}

function upload(response){
  console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;

