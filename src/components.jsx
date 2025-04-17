import { color_mix, largestProduct, dayOfWeek, payRaise} from './functions.js';

function Question1() {
    return <section>
        <br></br>
        1. Determines the secondary rgb_color from mixing two primary
        RGB (Red, Green, Blue) colors. The order of the colors
        is *not* significant.
        <h2>results</h2>
        <p>color_mix("r", "b") (red + blue) == {color_mix("r", "b")}</p>
        <p>color_mix("r", "g") (red + green) == {color_mix("r", "g")}</p>
        <p>color_mix("g", "b") (green + blue) == {color_mix("g", "b")}</p>
        <p>color_mix("r", "r") (red + red) == {color_mix("r", "r")}</p>
        <p>color_mix("b", "b") (blue + blue) == {color_mix("b", "b")}</p>
        <p>color_mix("g", "g") (green + green) == {color_mix("g", "g")}</p>
        <p>color_mix("r", "p") (red + purple (invalid input)) == {color_mix("r", "p")}</p>
    </section>;
}

function Question2() {
    return <section>
        2. Find the largest product out of three combinations.
        <h2>results</h2>
        <p>largestProduct(3, 2, 1) == {largestProduct(3, 2, 1)}</p>
        <p>largestProduct(8, 12, -90) == {largestProduct(8, 12, -90)}</p>
        <p>largestProduct(17, -2, 89) == {largestProduct(17, -2, 89)}</p>
        <p>largestProduct(30, 30, 30) == {largestProduct(30, 30, 30)}</p>
    </section>
}

function Question3() {
    return <section>
        3. Number of day into the week into day of week.
        <h2>results</h2>
        <p>dayOfWeek(1) == {dayOfWeek(1)}</p>
        <p>dayOfWeek(2) == {dayOfWeek(2)}</p>
        <p>dayOfWeek(3) == {dayOfWeek(3)}</p>
        <p>dayOfWeek(4) == {dayOfWeek(4)}</p>
        <p>dayOfWeek(5) == {dayOfWeek(5)}</p>
        <p>dayOfWeek(6) == {dayOfWeek(6)}</p>
        <p>dayOfWeek(7) == {dayOfWeek(7)}</p>
        <p>dayOfWeek(100) == {dayOfWeek(100)}</p>

    </section>
}

function Question4() {
    return <section>
        4. Write a function that converts from fahrenheit to celsius
        <h2>results</h2>
        <p>payRaise("F", 2, 25000) == ${payRaise("F", 2, 25000)}</p>
        <p>payRaise("P", 2, 25000) == ${payRaise("P", 2, 25000)}</p>
        <p>payRaise("F", 10, 10000) == ${payRaise("F", 10, 10000)}</p>
        <p>payRaise("F", 11, 10000) == ${payRaise("F", 11, 10000)}</p>
        <p>payRaise("F", 4, 10000) == ${payRaise("F", 4, 10000)}</p>
        <p>payRaise("F", 5, 10000) == ${payRaise("F", 5, 10000)}</p>
        <p>payRaise("P", 11, 10000) == ${payRaise("P", 11, 10000)}</p>
        <p>payRaise("P", 3, 10000) == ${payRaise("P", 3, 10000)}</p>
        <p>payRaise("F", 100, 10000) == ${payRaise("F", 100, 10000)}</p>
    </section>
}

function Question5() {
    return <section>
        5. Write a function that converts from fahrenheit to celsius
        <h2>results</h2>
    </section>
}

export { Question1, Question2, Question3, Question4, Question5 }