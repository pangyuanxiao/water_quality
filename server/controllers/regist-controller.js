const pubServer = require('./main-base');

// get users of application
exports.register = (req, res) => {
  console.log('In controller - register');
  // req.query.tableType = 'users';

  let param = req.body;
  param.tableType = 'users';

  // eslint-disable-next-line no-undef
  let document = {};

  const mess = checkParam(param.userName, param.passWord, param.email);
  if (mess !== ''){
    document.code = '200';
    document.message = 'FAILED';
    document.data = mess;
    res.json(document);
  } else {
    // eslint-disable-next-line no-undef
    param.userId = pubServer.guid();// 每次生成的即为一串不相同的字符串
    // eslint-disable-next-line no-undef
    db.insert(param, function(err, body, headers){
      if (err) {
        document.code = '200';
        document.message = 'FAILED';
        document.data = err;
      } else {
        document.code = '200';
        document.message = 'SUCCESS';
        document.data = 'Succeed in registration';
      }
      res.json(document);
    });
  }
};

function checkParam(userName, passWord, email){
  let mess = '';
  if (userName === '' || userName === undefined
    || passWord === '' || passWord === undefined
    || email === '' || email === undefined){
    mess = 'Registration failed, account or password or email is empty';
  }
  return mess;
}
