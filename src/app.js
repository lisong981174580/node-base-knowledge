const express = require('express');
const shelljs = require('shelljs');
const path = require('path');
const allowCors = require('./allowCors');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

// 创建一个 app 实例
const app = express();

// 允许跨域
app.use(allowCors);

/** 
 * @method 上传文件接口
 * @param {File} file
 * @param {any} param
 */
app.post('/upload', multipartMiddleware, (req, res) => {
  if (
    !req.files 
      || !req.files.file 
      || !req.files.file.path 
      || !req.files.file.originalFilename
      || !req.body.param
  ) {
    return res.json({
      msg: '入参缺失'
    })
  }

  shelljs.mv(
    req.files.file.path, 
    path.resolve(__dirname, `../public/${req.files.file.originalFilename}`)
  );

  res.json({
    param: req.body.param,
    msg: '文件上传成功',
  })
})

app.listen(3000, () => {
  console.log('启动成功，监听 3000端口')
})
