/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
*/

var inputVal = parseInt(document.getElementById("temp").value);
var convertedVal = 0;

function toCelsius(temp) {
  //T(°C) = (T(°F) - 32) × 5/9
  convertedVal = ((temp - 32) * (5 / 9));
  console.log(convertedVal);
}

function toFahrenheit(temp) {
  //T(°F) = T(°C) × 9/5 + 32
  convertedVal = (temp * (9 / 5) + 32);
  console.log(convertedVal);
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(e) {

    // This will actually return an array containing both of the radio buttons
    // so you will need to look at each item in the array and see if the 'checked'
    // property is true (sample code provided)
    var optionChosen = document.getElementsByName("conversion_type");
    var inputVal = parseInt(document.getElementById("temp").value);
    console.log(inputVal);
    // for loop
    for (var i = 0; i < optionChosen.length; i++) {
      if (optionChosen[i].checked && optionChosen[i].value === 'celsius') {
        toCelsius(inputVal);
      }
      if (optionChosen[i].checked && optionChosen[i].value === 'fahrenheit') {
        toFahrenheit(inputVal);
      }
      // end for loop
    }
    document.getElementById("converted").innerHTML = "<h1>" + convertedVal + "</h1>";
  }
  // Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.addEventListener('click', determineConverter);