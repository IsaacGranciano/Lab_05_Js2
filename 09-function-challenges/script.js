//Challenge 1
const fahrenheit = 40;

const getCelsius = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * 5 / 9;
  console.log(`Celsius: ${celsius}`);
  return celsius;
}

const temperature = getCelsius(fahrenheit);

//Challenge 2
const minMax = (arr) => {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}

const numbers = [3, 1, 4, 10, 2, 5, 8, 6];
const result = minMax(numbers);
console.log(result); 

//Challenge 3
(function(length, width) {
    console.log(`The rectangle has a length of ${length} and a width of ${width}.`);
  })(5, 10);
  


