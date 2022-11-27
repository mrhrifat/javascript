//Greetings
function greetings(greet, name) {
    function getGreet() {
        console.log(greet, name)
    }
    getGreet();
}
greetings("Assalamu Alaikum", "Taimiya")

//Greetings 2
function greetings2(greet2, name2) {
    function getGreet2() {
        if (name2 == "") {
            console.log("Empty name!\nBy the way" + greet2);
        } else {
            var firstName = name2.split(" ")[0];
            console.log(greet2, firstName);
        }
    }
    getGreet2();
}
greetings2("Assalamu Alaikum", "Imam Ibn Taiyma")


//New 
function feedback(name, comment) {
    function main() {
        console.log("Dear " + name + " ! " + comment)
    }
    main();
}
feedback("Shaikh", "Rahimahullah")

var feedback2 = function (name, comment) {
    function main() {
        if (name == " ") {
            console.log("Name not found \nBy the way the greetings: " + comment)
        } else {
            var lastName = name.split(" ")[2]
            console.log(lastName, comment)
        }
    }
    main()
}
var re2 = feedback2("Imam Ibn Taimiya", "Rahimahullah")

var messenger = function (greet, msg) {
    return function () {
        if (greet !== " ") {
            var temp = greet.split(" ")[0]
            return temp + " Alaikum..." + msg
        } else {
            return "Please enter greet message"
        }
    }
}
var r1 = messenger("Assalamu alaikum", "Please work hard")
console.log(r1())