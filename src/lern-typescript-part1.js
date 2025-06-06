function printcolor(color) {
    return ("this is ".concat(color.name, " with ").concat(color.index));
}
console.log(printcolor({ name: "white", color: "#fff", index: 3 }));
//  optional property(?)
function type(user) {
    console.log("His name is ".concat(user.name, " and place").concat(user.place, " sex is ").concat(user.sex));
}
type({ name: "Arshad", place: "Kannur", });
// UNION operater
function getPostion(postion) {
    console.log(postion);
}
getPostion(11);
getPostion("arshad");
// Type Assertion 
var nickname = "Achu";
var upperCasedNN = nickname.toUpperCase();
console.log(upperCasedNN);
var upperCasedNN1 = nickname.toLocaleLowerCase();
console.log(upperCasedNN1);
var tShirt = 58;
var achu = {
    id: 343,
    name: 'Arshad',
    email: 'achu@gmail.com',
    place: 'kannur',
    salary: 12345
};
console.log(achu);
