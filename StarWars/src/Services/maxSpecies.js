import { instance } from "./environment";

const getMaxSpecies = () =>
  instance
    .get("/speciesMax")
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

export default getMaxSpecies;
