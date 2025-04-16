// function hello(name){
//     return(`hello ${name}`);
// }

// function fahrenheitToCelsius(fahrenheit){
//     const celsius = (fahrenheit -32) * 5/9
//     return celsius;
// }

function colour_mix(rgb_colour1, rgb_colour2){
        // Determines the secondary rgb_colour from mixing two primary
        // RGB (Red, Green, Blue) colours. The order of the colours
        // is *not* significant.
        Returns "Error" if any of the rgb_colour parameter(s) are invalid.
            "red" + "blue": "fuchsia"
            "red" + "green": "yellow"
            "green" + "blue": "aqua"
            "red" + "red": "red"
            "blue" + "blue": "blue"
            "green" + "green": "green"
        Use: rgb_colour = colour_mix(rgb_colour1, rgb_colour2)
        -------------------------------------------------------
        Parameters:
            rgb_colour1 - a primary RGB rgb_colour (str)
            rgb_colour2 - a primary RGB rgb_colour (str)
        Returns:
            rgb_colour - a secondary RGB rgb_colour (str)
    }

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}

export {hello, fahrenheitToCelsius}