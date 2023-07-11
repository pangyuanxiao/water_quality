const pubServer = require('./main-base');

// get recommends of application
// 养殖业 ：名称name/中文名称nickName/温度temperature
// 空气湿度airHumidity/产物product/推荐理由reason
// 农作物 ：名称name/中文名称nickName/气温temperature/推荐理由reason
// 年降雨量annualRainfall/光照时长lightDuration/土壤酸碱度soilPh
// 土壤湿度soilMoisture/空气相对湿度airRelativeHumidity/产物product
// 纺织业：推荐理由reason

exports.listRecommends = (req, res) => {
  console.log('In controller - getRecommends');

  let document = {};

  let selector = {tableType: 'recommends'};

  // eslint-disable-next-line no-undef
  db.find({
    selector: selector,
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
        ret.breeds = body.docs[0].breeds;
        ret.crops = body.docs[0].crops;
        ret.textiles = body.docs[0].textiles;
        document.data = ret;
      } else {
        document.code = '200';
        document.message = 'FAILED';
        document.data = 'Not found recommends';
      }
    }
    res.json(document);
  });
  console.log('In controller - getRecommends');

};

