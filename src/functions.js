// function hello(name){
    // return(`hello ${name}`);
// }

// function fahrenheitToCelsius(fahrenheit){
//     const celsius = (fahrenheit -32) * 5/9
//     return celsius;
// }

function color_mix(c1, c2){
    //c1 is coloor one, c2 is colour two.
    var result = "";
    var mix = c1.concat(c2);

    if (c1 == c2){
        result = c1 == "r" ? "red" : c1 == "g" ? "green" : c1 == "b" ? "blue" : "invalid";
    } else if (mix == "rb" || mix == "br") {
        result = "fuchsia";
    } else if (mix == 'rg' || mix == 'gr') {
        result = "yellow";
    } else if (mix == 'gb' || mix == 'bg') {
        result = "aqua";
    } else {
        result = "Input is invalid.";
    }
    return result;
            // "red" + "blue": "fuchsia"
            // "red" + "green": "yellow"
            // "green" + "blue": "aqua"
            // "red" + "red": "red"
            // "blue" + "blue": "blue"
            // "green" + "green": "green"
    }

function largestProduct(val1, val2, val3){
    var result "";

    var num1 = val1 < 0 ? val1*-1 : val1;
    var num2 = val2 < 0 ? val2*-1 : val2;
    var num3 = val3 < 0 ? val3*-1 : val3;

    var oneTwo = num1 * num2;
    var twoThree = num2 * num3;
    var threeOne = num3 * num1;

    if (oneTwo >= twoThree && oneTwo >= threeOne) {
        result = oneTwo;
    }

    return result;
}

export {color_mix, largestProduct}