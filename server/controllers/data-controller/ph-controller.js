 const fs = require('fs');
 exports.readPh = (req, res) => {
   // 实际上的文件地址
    const file = 'public//data//PH.csv';
    const filename = 'example.csv';
    // 跨域
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', 'application/octet-stream');
    const fileStream = fs.createReadStream(file);
    fileStream.pipe(res);
  };
  
