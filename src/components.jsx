import {color_mix, largestProduct} from './functions.js';

function Question1(){
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

function Question2(){
    return <section>
2. Write a function that converts from fahrenheit to celsius        
<h2>results</h2>
<p>largestProduct(3, 2, 1) == {largestProduct(3, 2, 1)}</p>
    </section>
}

function Question3(){
    return <section>
3. Write a function that converts from fahrenheit to celsius        
<h2>results</h2>

    </section>
}

function Question4(){
    return <section>
4. Write a function that converts from fahrenheit to celsius        
<h2>results</h2>
    </section>
}

function Question5(){
    return <section>
5. Write a function that converts from fahrenheit to celsius        
<h2>results</h2>
    </section>
}

export {Question1, Question2, Question3, Question4, Question5}