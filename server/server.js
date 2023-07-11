// import dependencies and initialize express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const healthRoutes = require('./routes/health-route');
const swaggerRoutes = require('./routes/swagger-route');

// 新增登录相关信息
const loginRoutes = require('./routes/login-route');
const logoutRoutes = require('./routes/logout-route');
const registRoutes = require('./routes/regist-route');
const changePassRoutes = require('./routes/change-pass-route');

// 新增区域信息查询
const areaRoutes = require('./routes/area-route');

// 新增标签类型信息查询
const busTypeRoutes = require('./routes/bus-type-route');

// 新增编辑助农信息
const addOrUpdateRoutes = require('./routes/add-or-update-route');

// 助农信息查询
const listHelpsRoutes = require('./routes/list-helps-route');

const listInfos = require('./routes/list-infos-route');

const askInfo = require('./routes/ask-info-route');

const listTests = require('./routes/list-test-route');

// csv读取
const csvParse = require('./routes/csv-parse-route');
const ph = require('./routes/data-routes/ph-route');


const app = express();

// 连接数据库
// eslint-disable-next-line max-len
const nano = require('nano')('https://apikey-v2-1f76sv1b92d42svnlz5902rcve64ohyc1iwe4rds9whn:2b17f61a2b88c31b9dc27f31ce24cade@5525cdeb-488a-4687-a07d-317273db911a-bluemix.cloudantnosqldb.appdomain.cloud');
global.db = nano.db.use('db_znpt');

// enable parsing of http request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes and api calls
app.use('/health', healthRoutes);
app.use('/swagger', swaggerRoutes);

// 新增登录相关信息
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/regist', registRoutes);
app.use('/changePass', changePassRoutes);

// 新增区域信息查询
app.use('/allAreas', areaRoutes);

// 新增标签类型信息查询
app.use('/allTypes', busTypeRoutes);

// 新增编辑助农信息
app.use('/addOrUpdate', addOrUpdateRoutes);

// 助农信息查询
app.use('/listHelps', listHelpsRoutes);

// 获取推荐信息
app.use('/listInfos', listInfos);

// 调接口获取信息
app.use('/askInfo', askInfo);

app.use('/listTests', listTests);

app.use('/read', csvParse);

// 获取数据
app.use('/ph', ph);

// default path to serve up index.html (single page application)
app.all('', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
});

// start node server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App UI available http://localhost:${port}`);
  console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
});

// error handler for unmatched routes or api calls
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

module.exports = app;

