const util = require("util");
const fs = require("fs");
const path = require('path');

module.exports = {
  findAllCards: async function () {
    try {
      const readFile = util.promisify(fs.readFile).bind(fs);
      const data = await readFile(path.resolve('.','backend','models','json','data.json'),'utf8');
      return JSON.parse(data);
    } catch (e) {
      console.error(e);
    } 
  },
  insertTask: async function () {
  },
};
