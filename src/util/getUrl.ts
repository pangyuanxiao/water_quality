interface StringDictionary {
    [key: string ]: number;
  }
const pictureMap : StringDictionary ={
    'Chemical oxygen demand':0,
    'dissolved oxygen':1,
    'Dissolved total organic carbon':2,
    'PH':3,
    'phosphate':4,
    'silicate':5,
    'Total nitrogen':6,
    'Total phosphorus':7
}
export function pictureIndex(name:string):number{
   
    return pictureMap[name];
} 