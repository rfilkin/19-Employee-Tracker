import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
  //https://randomuser.me/api/?gender=female
  filterUserGenders: function(gender) {
    return axios.get("https://randomuser.me/api/?gender=" + gender);
  }
};

// //function compareNumbers(a, b) {
//   return a - b;
// }