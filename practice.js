// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.

// strategy
// declare a counter
// using each, check whether element is a multiple of 5 and count up if it is

// pseudocode
// declare counter
// for each element (each())
  // if element modulo of 5 is 0
    // count up counter
// return counter

var multiplesOfFive = function(numbers) {
  var counter = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      counter ++;
    }
  });
  return counter;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
// strategy
// filter, by checking whether element equals targetFruit


var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.

// check by whether first letter of iterated fruit equals letter
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(sum, product) {
    return sum + Number(product.price.replace('$', ''));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

// strategy / pseudocode
// declare a new object as starting value
// check whether the dessert type exists as key in object
// if it does
  // add up 1 to the value
// if not
  // add as new key and 1 as value
// return the accumulated object

var dessertCategories = function(desserts) {
  return _.reduce(desserts, function(groupedDessert, dessert) {
    if (groupedDessert[dessert.type] === undefined) {
      groupedDessert[dessert.type] = 1;
    } else {
      groupedDessert[dessert.type] += 1;
    }
    return groupedDessert;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

// I : array of objects
// O : array
// C :
// E :

// strategy using reduce, and empty array as accumulator
  // for each object, get out the movie that came ou between 1990 and 2000
  // push that into the accumulator and return that


var ninetiesKid = function(movies) {
  return _.reduce(movies, function(filteredMovies, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      filteredMovies.push(movie.title);
    }
    return filteredMovies;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.

// I : object and a number
// O : boolean

// strategy
// using reduce, and an accumulator that stores the shortes runtime movie
// check everytime whether the movie's timelimit is shorter that the acuumulated value
// and update accordingly

var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(shorter, movie) {
    if (movie.runtime < timeLimit || shorter) {
      return true;
    } else {
      return false;
    }
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.

var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.

// strategy
// using map, we want to add a new property to each object every iteration
// by checking if the ingredients array contains flour
var glutenFree = function(desserts) {
  return _.map(desserts, function(dessert) {
    dessert.glutenFree = dessert.ingredients.includes('flour');
    return dessert;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/

// using map,
// everytime we will add a new property to grocery
// with the price * (1 - coupon) as sale price
// and also round decimals to 2places
// by multiplying the result with 100,
// and rounding it up using Math.round
// then again dividing it with 100
// and convert to string adding $ to the start
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(grocery) {
    var price = Number(grocery.price.replace('$', ''));
    var salePrice = price * (1 - coupon);
    salePrice = Math.round(salePrice * 100) / 100;

    grocery.salePrice = '$' + salePrice;

    return grocery;

  });
};
