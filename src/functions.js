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
    var result = "";

    var num1 = val1 < 0 ? val1*-1 : val1;
    var num2 = val2 < 0 ? val2*-1 : val2;
    var num3 = val3 < 0 ? val3*-1 : val3;

    var oneTwo = num1 * num2;
    var twoThree = num2 * num3;
    var threeOne = num3 * num1;

    if (oneTwo >= twoThree && oneTwo >= threeOne) {
        result = val1 * val2;
    } else if (twoThree >= oneTwo && twoThree >= threeOne) {
        result = val2 * val3;
    } else if (threeOne >= oneTwo && threeOne >= twoThree) {
        result = val3 * val1;
    } else {
        result = "Input is invalid.";
    }

    return result;
}

function dayOfWeek(num){
    return num==1?"Sunday":num==2?"Monday":num==3?"Tuesday":num==4?"Wednesday":num==5?"Thursday":num==6?"Friday":num==7?"Saturday":"Error";
}

function payRaise(status, years, salary){
    var result = 0;
    var validStatus = status == "P" || status == "F";
    var invalidYear = years < 0;
    var invalidSalary = salary < 0;

    if (!validStatus || invalidYear || invalidSalary) {
        result = "Input is invalid.";
    } else if (years < 4) {
        result = status=="F"?salary*1.015:salary*1.01;
    } else if (status == "P" && years > 10) {
        result = salary*1.03;
    } else if (status == "F" && years >= 10) {
        result = salary*1.05;
    } else {
        result = salary*1.02;
    }

    return result.toFixed(2);
}

function leapYear(year){
    var result = "";
    var by4 = year%4==0;
    var by100 = year%100==0;
    var by400 = year%400==0;

    result = year<0?"Input is invalid":by400?"true":by4?`${!by100}`:"false";

    return result;
}

export {color_mix, largestProduct, dayOfWeek, payRaise, leapYear}