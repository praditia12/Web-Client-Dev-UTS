import converter from './ConvertCmToKm.js';
import isOdd from './IsOdd.ts';
import isPalindrome from './IsPalindrom.ts';
import fahrenheitToCelsius from './ConvertFahrenheitToCelcius.ts';
import removeFirstOccurrence from './RemoveFirstOccurrence.ts';

console.log(isOdd(1000));
console.log(isOdd(1001));

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));

console.log(converter.convertCmToKm(1000000));
console.log(converter.convertKmToCm(1));

console.log(fahrenheitToCelsius(100));

console.log(removeFirstOccurrence("lorem ipsum dolor", "rem ip"));