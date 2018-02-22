//Generate all combinations of a string
function combinator(mix) {
  list_of_strings = new Array();
  for(i=0;i<mix.length;i++) {
      for(j=i+1;j<mix.length+1;j++) {
          list_of_strings.push(mix.slice(i, j));
      }
  }
  return list_of_strings;
}
console.log(combinator("coffee"))


//Generate function that returns a passed string with letters in alphabetical order
function sorter(mix) {
  return mix.split("").sort().join("")
}
console.log(sorter("coffee"))

//Script that accepts a string as a parameter and converts the first letter of each word of the string in upper case
function uppercase(mix)
{
  var array1 = mix.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("coffee is awesome"));

//Palindrome checker
function palindrome(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse(); 
  var joinArray = reverseArray.join("");
  // return joinArray; 
  if (str == joinArray) {
      return true; 
  } else {
    return false; 
  }
}
console.log(palindrome('hannah'));
console.log(palindrome('coffee'));

//Script that finds longest word in a string
find('Coffee is awesome');
function find(str) {
  const stringArray = str.split(" ");
  const orderedArray = stringArray.sort((a, b) => {
    return a.length < b.length;
  });
  return orderedArray[0];
}
console.log(find('Coffee is awesome'))

//    Write a script to extract unique characters from a string.
