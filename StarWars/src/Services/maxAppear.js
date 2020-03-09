import { instance } from "./environment";

const getMaxAppear = () =>
  instance
    .get("/maxPerSeen")
    .then(function(response) {
      // handle success

      console.log(response.data);
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });

export default getMaxAppear;
