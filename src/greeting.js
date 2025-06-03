function sayGreeting(messege) {
    console.log("".concat(messege, " is greeting"));
}
var greet = " hello ";
sayGreeting(greet);
function sample(a) {
    return ("this is ".concat(a, " number"));
}
var b = "three";
console.log(sample(b));
function printcolor(color) {
    return ("this is ".concat(color.name, " with ").concat(color.index));
}
console.log(printcolor({ name: "white", color: "#fff", index: 3 }));
