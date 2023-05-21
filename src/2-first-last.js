export const firstLast = (items) => {
  if (items.length === 1) {
    return `Only item: ${items[0]}`
  }
  if (items.length === 0) {
    return 'No items!'
  }
  
  return `First: ${items[0]}, Last: ${items[items.length -1]}`
}
/*
This code exports a function called firstLast using the export keyword, 
making it accessible from other modules.
The function takes an argument items, which is expected to be an array. 
The purpose of this function is to return a string 
that combines the first and last elements of the array.
*/