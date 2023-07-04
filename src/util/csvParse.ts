import * as csvParse from 'csv-parse';
import * as fs from 'fs';
export function test():void{
    fs.readFile('water_potability.csv', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
         csvParse.parse (data, { delimiter: ',', columns: true }, (err, csvData) => {
          if (err) {
            console.error(err);
            return;
          }
      
          console.log(csvData);
        });
      });
}
export function demo():void{
    console.log(123)
}