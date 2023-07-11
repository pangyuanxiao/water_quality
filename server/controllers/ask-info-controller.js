const request = require('request');

exports.askInfo = (req, res) => {
  console.log('In controller - askInfo');

  // crops 农作物
  // eslint-disable-next-line max-len,no-unused-vars
  let c_pathUrl = 'https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/7628f25a-0002-4567-91ee-57db8d9478ef/predictions?version=2021-07-22';
  // breeds 养殖业
  // eslint-disable-next-line max-len,no-unused-vars
  let b_pathUrl = 'https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/68df1f21-0245-4c89-910f-bab0bf72633f/predictions?version=2021-07-22';

  let test_url = 'https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/1ea0d274-f70b-4071-b65a-bd37c09c7b12/predictions?version=2021-07-23';
  const e = request({
    url: test_url,
    method: 'POST',
    json: {username: '1485002951@qq.com', password: 'Cmq0001!'},
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
    },
    verify: false}
  , function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body);
    } else {
      console.log('请求异常' + error + '====' + response + '-----' + body);
    }
  });
  res.json(e);
};

