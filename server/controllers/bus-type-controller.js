const pubServer = require('./main-base');

// get busTyp of application
exports.busTypes = (req, res) => {
  console.log('In controller - getBusTypes');
  // req.query.tableType = 'busTyp';

  // eslint-disable-next-line no-undef
  let document = {};

  // eslint-disable-next-line no-undef
  let selector = {};

  let code = req.body.code;
  if (code === '' || code === undefined){
    selector.tableType = 'busTyp';
  } else {
    selector.code = code;
    selector.tableType = 'helps';
  }

  // eslint-disable-next-line no-undef
  db.find({
    selector: selector,
    sort: [{busId: 'asc'}],
  }, function(err, body) {
    if (err) {
      document.code = '200';
      document.message = 'FAILED';
      document.data = err;
    } else {
      document.code = '200';
      document.message = 'SUCCESS';
      // eslint-disable-next-line max-len
      document.data = pubServer.forView(body.docs, ['busId', 'busName']);
    }
    res.json(document);
  });
};
