/**
 * 生成唯一标识uuid
 * @returns
 */
// eslint-disable-next-line no-unused-vars
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0;
    let v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * 回显展示参数
 * @param bodyDocs
 * @returns {*[]}
 */
// eslint-disable-next-line no-unused-vars
function forView(bodyDocs, strs){
  let objectArray = [];
  if (bodyDocs.length > 0) {
    for (let i = 0; i < bodyDocs.length; i++) {
      // eslint-disable-next-line no-undef
      let obj = {};
      // eslint-disable-next-line max-len
      aTob(obj, bodyDocs[i], strs);
      objectArray[i] = obj;
    }
  }
  return objectArray;
}

/**
 * a的参数赋值给b
 * @param a
 * @param b
 * @param keyName
 */
function aTob(a, b, keyNames){
  for (let i = 0; i < keyNames.length; i++){
    let keyName = keyNames[i];
    a[keyName] = b[keyName];
  }
  return a;
}

module.exports = {guid, forView};
