module.exports = function user {
  
  class User {
  constructor(firstName, lastName, country) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.country = country;
    }
    setFavDish(favDish){
      this.favDish = favDish;
    }
    response(){
      return `${this.firstName} has been created and likes ${this.favDish}`;
    }
  }
}