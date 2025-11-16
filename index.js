//! Start by creating the variables for the data recorded
const day1TempF = 32;
const day3TempF = 70;
const day5TempF = 80;
const day7TempF = 72;
const day9TempF = 68;
const day11TempF = 75;
const day13TempF = 82;
const day15TempF = 65;
const day17TempF = 77;
const day19TempF = 78;
const day21TempF = 73;
const day23TempF = 79;
const day25TempF = 71;
const day27TempF = 74;
const day29TempF = 76;

const day2TempC = 25;
const day4TempC = 18;
const day6TempC = 15;
const day8TempC = 28;
const day10TempC = 20;
const day12TempC = 23;
const day14TempC = 30;
const day16TempC = 22;
const day18TempC = 26;
const day20TempC = 24;
const day22TempC = 21;
const day24TempC = 27;
const day26TempC = 19;
const day28TempC = 17;
const day30TempC = 29;


function CtoF(c) {
  return (c * 9/5) + 32;
}

function FtoC(f) {
  return (f - 32) * 5/9;
}



let tot_temperature_in_fahrenheit =
  day1TempF + day3TempF + day5TempF + day7TempF + day9TempF +
  day11TempF + day13TempF + day15TempF + day17TempF + day19TempF +
  day21TempF + day23TempF + day25TempF + day27TempF + day29TempF +

  CtoF(day2TempC) + CtoF(day4TempC) + CtoF(day6TempC) + CtoF(day8TempC) +
  CtoF(day10TempC) + CtoF(day12TempC) + CtoF(day14TempC) + CtoF(day16TempC) +
  CtoF(day18TempC) + CtoF(day20TempC) + CtoF(day22TempC) + CtoF(day24TempC) +
  CtoF(day26TempC) + CtoF(day28TempC) + CtoF(day30TempC);

// Total in Celsius (convert all F → C)
let tot_temperature_in_celsius =
  FtoC(day1TempF) + FtoC(day3TempF) + FtoC(day5TempF) + FtoC(day7TempF) +
  FtoC(day9TempF) + FtoC(day11TempF) + FtoC(day13TempF) + FtoC(day15TempF) +
  FtoC(day17TempF) + FtoC(day19TempF) + FtoC(day21TempF) + FtoC(day23TempF) +
  FtoC(day25TempF) + FtoC(day27TempF) + FtoC(day29TempF) +

  day2TempC + day4TempC + day6TempC + day8TempC + day10TempC +
  day12TempC + day14TempC + day16TempC + day18TempC + day20TempC +
  day22TempC + day24TempC + day26TempC + day28TempC + day30TempC;



// Start the calculation of the average temperatures
// Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit);

console.log("Total temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average temperature in Celsius:", avg_temperature_in_celsius);

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
     avg_temperature_in_celsius
};