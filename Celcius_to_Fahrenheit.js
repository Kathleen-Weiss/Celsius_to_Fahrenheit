function degreesCelsius(fahrenheit){
    celcius = (fahrenheit - 32) * (5/9) 
    console.log(`${fahrenheit} °F equivalem a ${celcius} °C`)
}

function degreesFahrenheit(celcius){
    fahrenheit = (celcius * (9/5)) + 32
    console.log(`${celcius} °C equivalem a ${fahrenheit} °F`)
}

let degreesC = "23"
let degreesF = "47"

degreesCelsius(degreesF)
degreesFahrenheit(degreesC)