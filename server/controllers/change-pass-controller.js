const pubServer = require('./main-base');

// get users of application
exports.changePass = (req, res) => {
  console.log('In controller - changePass');
  // req.query.tableType = 'users';

  let param = req.body;
  param.tableType = 'users';
  let newPass = param.newPass;
  let oldPass = param.oldPass;

  // eslint-disable-next-line no-undef
  let document = {};

  // eslint-disable-next-line max-len
  const mess = checkParam(newPass, oldPass, param.userName);
  if (mess !== ''){
    document.code = '200';
    document.message = 'FAILED';
    document.data = mess;
    res.json(document);
  } else {
    // eslint-disable-next-line no-undef
    db.find({
      selector: {
        userName: param.userName,
        tableType: 'users',
      },
    }, function(err, body) {
      if (err) {
        document.code = '200';
        document.message = 'FAILED';
        document.data = err;
        res.json(document);
      } else {
        // eslint-disable-next-line no-undef
        let document = {};
        if (body.docs.length > 0){
          document = body.docs[0];
          if (document.passWord === param.oldPass){
            document.passWord = param.newPass;
            // eslint-disable-next-line no-undef
            db.insert(document, function(err, body, headers){
              if (err) {
                document.code = '200';
                document.message = 'FAILED';
                document.data = err;
              } else {
                document.code = '200';
                document.message = 'SUCCESS';
                document.data = 'Secret changed successfully';
              }
              res.json(document);
            });
          } else {
            document.code = '200';
            document.message = 'FAILED';
            document.data = 'The old password is incorrect';
            res.json(document);
          }
        } else {
          document.code = '200';
          document.message = 'FAILED';
          document.data = 'User does not exist;\n';
          res.json(document);
        }
      }
    });
  }
};

function checkParam(newPass, oldPass, userName){
  let mess = '';
  if (newPass === '' || newPass === undefined){
    mess = 'The new password is empty';
  }
  if (oldPass === '' || oldPass === undefined){
    mess = 'The old password is empty';
  }
  if (userName === '' || userName === undefined){
    mess = 'Account can not be empty';
  }
  if (oldPass === newPass){
    mess = 'The new password is identical to the last one password';
  }
  return mess;
}
