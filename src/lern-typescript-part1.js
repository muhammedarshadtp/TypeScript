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
var user = {
    name: "arshad",
    city: "kannur"
};
console.log(user);
var sum = function (p, d) { return p + d; };
var mult = function (p, d) { return p * d; };
console.log(sum(2, 3));
console.log(mult(2, 3));
var milan = {
    name: "milan",
    address: "germeny"
};
console.log(milan);
// Type Narrowing
function getPosition(postion) {
    if (typeof postion === "string")
        console.log(postion.split(" "));
    else
        console.log(postion.toFixed());
}
getPosition(22);
getPosition("Arshad");
function checkAndPrint(value) {
    if (value && typeof value === "object") {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var key = value_1[_i];
            console.log(key);
        }
    }
    else if (value === "string") {
        console.log(value.toLocaleLowerCase());
    }
}
checkAndPrint(['cat', 'dog', 'mouse']);
checkAndPrint('Arshad');
// Narrowing using "Equaily" operater
function equalChecking(a, b) {
    if (a === b) {
        a.split(' ');
        b.toLocaleUpperCase();
    }
    else {
        console.log(a);
        console.log(b);
    }
}
function activity(actor) {
    if ("study" in actor) {
        return actor.study();
    }
    else {
        return actor.work();
    }
}
// Narrowing using "instanceof" checking
function Checking(value) {
    if (value instanceof Date) {
        console.log(value.getTime());
    }
    else {
        console.log(value.toLocaleLowerCase());
    }
}
// Narrowing using "Type Predicates"
/*
this is return a boolen value
they have a perticular return type we using key ward is called " is "
*/
function isNumber(value) {
    return typeof value === 'number';
}
console.log(isNumber(3));
var s1 = { kind: 'cricle', radius: 30 };
var s2 = { kind: 'squre', side: 28 };
function getArea(s) {
    if (s.kind === 'squre') {
        return s.side * s.side;
    }
    else {
        return Math.PI * s.radius * s.radius;
    }
}
console.log(getArea(s1));
console.log(getArea(s2));
