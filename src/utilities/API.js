import axios from "axios";


export default {
  getImages: function() {
    return axios.get("https://pixabay.com/api/?key=14217002-d101f7169a9fd762b1872b464&q=vegan&image_type=photo");
  }
  
};
