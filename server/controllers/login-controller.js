// get users of application
exports.login = (req, res) => {
  console.log('In controller - login');
  // req.query.tableType = 'users';

  let param = req.body;
  param.tableType = 'users';

  // eslint-disable-next-line no-undef
  let document = {};

  const mess = checkParam(param.userName, param.passWord);
  if (mess !== ''){
    document.code = '200';
    document.message = 'FAILED';
    document.data = mess;
    res.json(document);
  } else {
    // eslint-disable-next-line no-undef,max-len
    db.find({
      selector: {
        userName: param.userName,
        passWord: param.passWord,
        tableType: 'users',
      },
    }, function(err, body) {
      if (err) {
        document.code = '200';
        document.message = 'FAILED';
        document.data = err;
      } else {
        if (body.docs.length > 0){
          let data = {};
          data.userId = body.docs[0].userId;
          data.userName = body.docs[0].userName;
          data.nickName = body.docs[0].nickName;
          data.email = body.docs[0].email;

          document.code = '200';
          document.message = 'SUCCESS';
          document.data = data;
        } else {
          document.code = '200';
          document.message = 'FAILED';
          document.data = 'Your username or password was incorrect';
        }
      }
      res.json(document);
    });
  }
};

function checkParam(userName, passWord){
  let mess = '';
  if (userName === '' || userName === undefined
    || passWord === '' || passWord === undefined){
    mess = 'Login failed, account or password is empty';
  }
  return mess;
}
