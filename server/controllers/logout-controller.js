// get users of application
exports.logout = (req, res) => {
  console.log('In controller - logout');

  // eslint-disable-next-line no-undef
  let document = {};
  document.code = '200';
  document.message = 'SUCCESS';
  document.data = 'Logout success';
  res.json(document);
};
