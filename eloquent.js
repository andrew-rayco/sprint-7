
// Minimum
// Write a function min that takes two arguments and returns their minimum.
function smallest(a, b) {
  if (a <= b) {
    return a;
  }
  return b;
};

smallest(7, 5);

// Recursion
// Define a recursive function that tests whether a given number is even or not
function isEven(num) {
    if (num === 0) {
      return true;
    } else if (num === 1) {
      return false;
    } else if (num > 1) {
      return isEven(num - 2);
    } else if (num < 0) {
      return isEven(num + 2);
    }
};

isEven(75);


// Bean Counting
// Write a function that takes a string and returns a number that indicates how many uppercase “B” characters are in the string.
function countBs(str) {
  var count = 0;
  for (var i=0; i<str.length; i++) {
    if (str[i] === "B") {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));

// Bean Counting 2
// write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that is
// to be counted (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.
function countChar(str, char) {
  var count = 0;
  for (var i=0; i<str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));
