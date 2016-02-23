module.exports = function Test() {
  
  class Test {
  constructor(test) {
      this.test = test;

      console.log("TEST CREATED")
    }
    response(){
      return `${this.test} has been created`;
    }
  }
}