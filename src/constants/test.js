
const dataMain = require('./infoItem.json')
const dataMove = require('./forsage2.json')
const fs = require("fs")


function fileHandler(item){
  fs.writeFile('infoItem.json', JSON.stringify(item), (err) => {
    if (err) throw err;
    console.log('Data has been added!');
  });
}
const trallers = dataMove.videos


console.log()
fileHandler({...dataMain, ...trallers})