var _ = {
    // Produces a new array of values by mapping each value through the callback function
    map: function(arr, callback, memo=[]) {
        for (var i = 0; i < arr.length; i++){
            memo.push(callback(arr[i]));
        }
        return memo;
    },

    // boils down a list of values into a single value, successively applying the callback to include each element
    reduce: function(arr, callback, memo=0) { 
        for (var i = 0; i < arr.length; i++){
            memo = callback(memo, arr[i]);
        }
        return memo;
    },
    // Looks through each value in the list, returning the first one that passes a truth test (defined by the callback function), or undefined if no value passes the test.
    find: function(arr, callback) {   
        for (var i = 0; i < arr.length; i++){
            if (callback(arr[i])){
                return arr[i];
            }
        }
        return undefined;
    },

    // Looks through each value in the list, returning an array of all the values that pass a truth test (defined by the callback function).
    filter: function(arr, callback, memo=[]) { 
        for (var i=0; i < arr.length; i++){
            if (callback(arr[i])){
                memo.push(arr[i]);
            }
        }
        return memo;
    },

    // Returns the values in list without the elements that the truth test passes. The opposite of filter.
    reject: function(arr, callback, memo=[]) { 
       for (var i=0; i < arr.length; i++){
            if (!callback(arr[i])){
                memo.push(arr[i]);
            }
        }
        return memo;
    },
};


// Test the methods
let arr1 = [1, 2, 3, 4, 5, 6];
console.log('Original Array:');
console.log(arr1);

let arr2 = _.map(arr1, function(num){return num * 2;});
console.log('After mapping with a times 2 function:');
console.log(arr2);

let arr3 = _.reduce(arr1, function(memo, num){return memo + num;});
console.log('After reducing with a sum function:');
console.log(arr3);

let val1 = _.find(arr1, function(num){return num % 3 == 0;});
console.log('First element that passes the divisible by 3 test:');
console.log(val1);

let arr4 = _.filter(arr1, function(num){return num % 3 == 0;});
console.log('After filtering for divisible by 3:');
console.log(arr4);

let arr5 = _.reject(arr1, function(num){return num % 3 == 0;});
console.log('After rejecting divisible by 3:');
console.log(arr5);