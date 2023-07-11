const pubServer = require('./main-base');

// get helps of application
exports.addOrUpdate = (req, res) => {
  console.log('In controller - addOrUpdate');
  // req.query.tableType = 'helps';

  let param = req.body;
  param.tableType = 'helps';
  const mess = checkParam(param);

  // eslint-disable-next-line no-undef
  let document = {};
  if (mess !== ''){
    document.code = '200';
    document.message = 'FAILED';
    document.data = mess;
    res.json(document);
  } else {
    const messId = param.messId;
    if (messId === '' || messId === undefined){
      // 新增
      param.messId = pubServer.guid();// 每次生成的即为一串不相同的字符串
      // eslint-disable-next-line no-undef
      db.insert(param, function(err, body, headers){
        if (err) {
          document.code = '200';
          document.message = 'FAILED';
          document.data = err;
        } else {
          document.code = '200';
          document.message = 'SUCCESS';
          document.data = 'Publishing success';
        }
        res.json(document);
      });
    } else {
      // 更新
      // eslint-disable-next-line no-undef
      db.find({
        selector: {
          messId: messId,
          tableType: 'helps',
        },
      }, function(err, body) {
        if (err) {
          document.code = '200';
          document.message = 'FAILED';
          document.data = err;
        } else {
          // eslint-disable-next-line no-undef
          let dct = {};
          if (body.docs.length > 0){
            dct = body.docs[0];
          } else {
            dct.messId = pubServer.guid();// 每次生成的即为一串不相同的字符串
          }
          dct.pudDate = param.pudDate;
          dct.busId = param.busId;
          dct.busName = param.busName;
          dct.code = param.code;
          dct.address = param.address;
          dct.pubOrPri = param.pubOrPri;
          dct.titleName = param.titleName;
          dct.shortTitle = param.shortTitle;
          dct.content = param.content;
          // eslint-disable-next-line no-undef
          db.insert(dct, function(err, body, headers){
            if (err) {
              document.code = '200';
              document.message = 'FAILED';
              document.data = err;
            } else {
              document.code = '200';
              document.message = 'SUCCESS';
              document.data = 'Update success';
            }
          });
        }
        res.json(document);
      });
    }
  }
};

function checkParam(param){
  let mess = '';
  if (param.titleName === '' || param.titleName === undefined){
    mess = 'Subject cannot be blank';
  }
  return mess;
}
