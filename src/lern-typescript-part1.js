function printcolor(color) {
    return ("this is ".concat(color.name, " with ").concat(color.index));
}
console.log(printcolor({ name: "white", color: "#fff", index: 3 }));
//  optional property(?)
function type(user) {
    console.log("His name is ".concat(user.name, " and place").concat(user.place, " sex is ").concat(user.sex));
}
type({ name: "Arshad", place: "Kannur", });
function greet1(user) {
    if (user.age !== undefined) {
        return "Hello ".concat(user.name, ", age ").concat(user.age);
    }
    return "Hello ".concat(user.name);
}
console.log(greet1({ name: "Alice", age: 25 })); // "Hello Alice, age 25"
console.log(greet1({ name: "Bob" })); // "Hello Bob"
