const fs = require('fs');
exports.read = (req, res) => {
  console.log('In controller - readtext');

  fs.readFile('public//water_potability.csv', (err, data) => {
    if (err) {
      console.error(err);
  
       return;
    }
    
    let ds = data.toString();
    res.json({
        text: ds,
      });
  });
};
