// const pubServer = require('./main-base');

// get areas of application
exports.getAreas = (req, res) => {
  console.log('In controller - getAreas');
  // req.query.tableType = 'areas';

  // eslint-disable-next-line no-undef
  let document = {};
  // eslint-disable-next-line no-undef
  db.find({
    selector: {
      tableType: 'areas',
    },
  }, function(err, body) {
    if (err) {
      document.code = '200';
      document.message = 'FAILED';
      document.data = err;
    } else {
      if (body.docs.length > 0){
        document.code = '200';
        document.message = 'SUCCESS';
        // eslint-disable-next-line max-len
        document.data = body.docs[0].areas;// pubServer.forView(body.docs, ['value', 'label', 'children']);
      } else {
        document.code = '200';
        document.message = 'FAILED';
        document.data = 'Not found areas';
      }
    }
    res.json(document);
  });
};

// get amhara of application
exports.getAmhara = (req, res) => {
  console.log('In controller - getAmhara');

  // eslint-disable-next-line no-undef
  let document = {};
  // eslint-disable-next-line no-undef
  db.find({
    selector: {
      tableType: 'amhara',
    },
  }, function(err, body) {
    if (err) {
      document.code = '200';
      document.message = 'FAILED';
      document.data = err;
    } else {
      if (body.docs.length > 0){
        document.code = '200';
        document.message = 'SUCCESS';
        // eslint-disable-next-line max-len
        let ret = {};
        ret.place = body.docs[0].place;
        ret.list = body.docs[0].list;
        document.data = ret;
      } else {
        document.code = '200';
        document.message = 'FAILED';
        document.data = 'Not found crops';
      }
    }
    res.json(document);
  });
};
