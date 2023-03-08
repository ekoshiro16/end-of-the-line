/*
You are the proud owner of a small restaurant. Business has been going great, but unfortunately there's been one consistent problem: line cutters! While most of your customers are nice and respectful, there are the occasional few who cut in line and are rude to your regulars. Luckily, you are also a programmer, so you have just the algorithm to handle these types of people.

Write a function that takes an array of strings, where each string element can either be a customer name or a string like "line cutter". Your function should move all of the "line cutters" to the end, while preserving the order of the other customers, and output this reorganized array. 

For example:
If your input array argument looked like:
["line cutter", "Jim", "line cutter", "John", "Jane", "Abby"]

Your function would return:
["Jim", "John", "Jane", "Abby", "line cutter", "line cutter"]

Or if your input array argument looked like:
["Pete", "line cutter", "line cutter", "line cutter", "Ryan", "line cutter", "Owen", "Marsha"]

Your function would return:
["Pete", "Ryan", "Owen", "Marsha", "line cutter", "line cutter", "line cutter", "line cutter"]

Note: You can expect that your input array argument will always contain at least 2 elements. 
*/

// Write your code below: 