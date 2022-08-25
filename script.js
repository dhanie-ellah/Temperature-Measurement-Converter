// CONVERSION FUNCTION
function converttemp() {
     let from = document.getElementById("from").value;
     let to = document.getElementById("to").value;
     let constnumber = parseInt(document.getElementById("number").value);

     if (constnumber) {
          // FROM KELVIN TO FARENHEIT
          if (from == 'kelvin' && to == 'farenheit') {
               let result = (constnumber - 273.15) * (9 / 5) + 32
               output.innerHTML = `${constnumber} kelvin = ${result.toFixed(2)} farenheit`
          } //FROM FARENHEIT TO KELVIN
          else if (from == 'farenheit' && to == 'kelvin') {
               let result = (constnumber - 32) * (5 / 9) + 273.15
               output.innerHTML = `${constnumber} farenheit = ${result.toFixed(2)} kelvin`
          } //CELCIUS TO FARENHEIT
          else if (from == 'celcius' && to == 'farenheit') {
               let result = (constnumber * (9 / 5)) + 32
               output.innerHTML = `${constnumber} celcius = ${result.toFixed(2)} farenheit`
          } //FARENHEIT TO CELCIUS
          else if (from == 'farenheit' && to == 'celcius') {
               let result = (constnumber - 32) * (5 / 9)
               output.innerHTML = `${constnumber} farenheit = ${result.toFixed(2)} celcius`
          } //CELCIUS TO KELVIN
          else if (from == 'celcius' && to == 'kelvin') {
               let result = constnumber + 273.15
               output.innerHTML = `${constnumber} celcius = ${result.toFixed(2)} kelvin`
          } //KELVIN TO CELCIUS
          else if (from == 'kelvin' && to == 'celcius') {
               let result = constnumber - 273.15
               output.innerHTML = `${constnumber} kelvin = ${result.toFixed(2)} celcius`
          } else {
               output.innerHTML = 'Select different units of measurement'
          }
     } else {
          output.innerHTML = 'Input a number'
     }
}