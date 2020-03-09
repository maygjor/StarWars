import { instance } from "./environment";

const getMaxCrawl = () =>
  instance
    .get("/maxCrawlNo")
    .then(function(response) {
      // handle success

      console.log(response);
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });

export default getMaxCrawl;
