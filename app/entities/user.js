var user = {
  name :"",
  email:"",
  id   : 0,
  make : function(name,email) {
    this.name = name;
    this.email = email;
    return this;
  }
};

module.exports = {

    user

}