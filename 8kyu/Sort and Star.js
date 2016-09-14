Sort and Star

Description:

You will be given an array (s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have '***' between each of its letters.

//Fundamentals     Strings     Arrays

my solution

function twoSort(s) {
s.sort();
var a = ''+s[0];
var b = a.split('');
var c = b.join('***');
return c;
}

others solution

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}