const axios = require("axios");
// let local = axios.create({
//   baseURL: "http://localhost:2700/"
// });
let heroku = axios.create({
  baseURL: "https://starwars1node.herokuapp.com/"
});
module.exports = { instance: heroku };
