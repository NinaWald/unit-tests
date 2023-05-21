// using method indexOf, built-in array method
export const findIndex = (array, value) => {
  return array.indexOf(value);
};


/*
using simple loop "for" to iterate
export const findIndex = (array, value) => {
  for (let i = 0; i < array.length; i++)
  {
    if (value === array[i]) {
      return i
    }
  } 
  return -1
}
using method findIndex
export const findIndex = (array, value) => {
  return array.findIndex((element) => element === value);
};
*/
/*
This code exports a function called findIndex using the export keyword, 
making it accessible from other modules.
The function takes two arguments: array and value. 
The purpose of this function seems to be 
finding the index of a specific value within an array.

 items is the name of the array. The line const items = 
 ['Apple', 'Banana', 'Orange', 'Pear', 'Lemon'] 
 initializes an array variable named items with five elements: 
 'Apple', 'Banana', 'Orange', 'Pear', and 'Lemon'.
 A value is for example Apple.
*/