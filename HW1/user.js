// class in ES5
function User (name, age, phone){
    this.name = name;
    this.age = age;
    this.phone = phone;
}

User.prototype.getName = function(){
    return this.name;
}
User.prototype.getAge = function() {
    return 'Age("' + this.age + '")';
};
User.prototype.setPhone = function(email){
    this.phone = phone; 
}
User.prototype.getPhone = function(){
    return this.phone;
}
User.prototype.AllAboutUser = function() {
    console.log( this.name + " " + this.age + " " + this.phone);
}

module.exports = User; 