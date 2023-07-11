const pubServer = require('./main-base');

// get helps of application
exports.listHelps = (req, res) => {
  console.log('In controller - listHelps');
  // req.query.tableType = 'helps';

  let param = req.body;
  // param.tableType = 'helps';

  let page = param.pageNum;
  let pageSize = param.pageSize;
  let index;
  if (pageSize === '' || pageSize === undefined){
    pageSize = 8; // 一页最多显示多少条
  } else {
    pageSize = parseInt(pageSize, 10);
  }
  if (page === '' || page === undefined){
    index = 0;
  } else {
    // 下一页（（当前页数-1）*一页显示最大条数）
    index = (parseInt(page, 10) - 1) * pageSize;
  }

  // eslint-disable-next-line no-undef
  let document = {};
  let selector = {};
  document.totalNum = 0;

  selector.tableType = 'helps';
  if (param.code !== '' && param.code !== undefined){
    selector.code = param.code;
  }
  if (param.busId !== '' && param.busId !== undefined){
    selector.busId = param.busId;
  }
  if (param.titleName !== '' && param.titleName !== undefined){
    selector.titleName = {$regex: param.titleName};
  }

  // eslint-disable-next-line no-undef
  db.find({
    selector: selector,
  }, function(err, body) {
    if (!err) {
      document.totalNum = body.docs.length;
      if (document.totalNum !== 0){
        // eslint-disable-next-line no-undef
        db.find({
          selector: selector,
          // sort: [{createDate: 'desc'}],
          skip: index,
          limit: pageSize,
        }, function(err, body) {
          if (err) {
            document.code = '200';
            document.message = 'FAILED';
            document.data = err;
          } else {
            document.code = '200';
            document.message = 'SUCCESS';
            // eslint-disable-next-line max-len
            document.data = pubServer.forView(body.docs, ['messId', 'pubDate', 'busId', 'busName', 'createUser', 'code', 'codes', 'address', 'pubOrPri', 'createDate', 'titleName', 'shortTitle', 'content']);
          }
          res.json(document);
        });
      } else {
        document.code = '200';
        document.message = 'SUCCESS';
        res.json(document);
      }
    } else {
      document.code = '200';
      document.message = 'FAILED';
      document.data = err;
      res.json(document);
    }
  });
};
