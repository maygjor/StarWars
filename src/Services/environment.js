const axios = require("axios");
let local = axios.create({
  baseURL: "http://localhost:2700/"
});
module.exports = { instance: local };
