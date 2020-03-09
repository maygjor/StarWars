import { instance } from "./environment";

const getMaxPilots = () =>
  instance
    .get("/planetWithMaxPilot")
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

export default getMaxPilots;
