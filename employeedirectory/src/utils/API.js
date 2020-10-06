import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
  },
  getParticularEmployee: function(employee) {
    return axios.get("https://randomuser.me/api/?prefix="+employee+ "&limit=5&nat=us");
  },
};
