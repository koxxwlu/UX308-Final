import { color_mix, largestProduct, dayOfWeek, payRaise, leapYear} from './functions.js';

function Question1() {
    return <section>
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
        ______________________________________________________________________________________<br></br><br></br>
        2. Find the largest product out of three combinations.
        <h2>results</h2>
        <p>largestProduct(3, 2, 1) == {largestProduct(3, 2, 1)}</p>
        <p>largestProduct(8, 12, -90) == {largestProduct(8, 12, -90)}</p>
        <p>largestProduct(17, -2, 89) == {largestProduct(17, -2, 89)}</p>
        <p>largestProduct(30, 30, 30) == {largestProduct(30, 30, 30)}</p>
        <p>largestProduct(-8, 12, 20) == {largestProduct(-8, 12, 20)}</p>
    </section>
}

function Question3() {
    return <section>
        ______________________________________________________________________________________<br></br><br></br>
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
        ______________________________________________________________________________________<br></br><br></br>
        4. Calculate pay raise based on status & year.
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
        ______________________________________________________________________________________<br></br><br></br>
        5. See if a year is leap year.
        <h2>results</h2>
        <p>leapYear(1700)(false) == {leapYear(1700)}</p>
        <p>leapYear(1800)(false) == {leapYear(1800)}</p>
        <p>leapYear(1900)(false) == {leapYear(1900)}</p>
        <p>leapYear(1600)(true) == {leapYear(1600)}</p>
        <p>leapYear(2000)(true) == {leapYear(2000)}</p>
        <p>leapYear(-2000)(false) == {leapYear(-2000)}</p>
        <p>leapYear(1999)(false) == {leapYear(1999)}</p><br></br>
        <p>leapYear(1000)(false) == {leapYear(1000)}</p>
        <p>leapYear(1001)(false) == {leapYear(1001)}</p>
    </section>
}

export { Question1, Question2, Question3, Question4, Question5 }