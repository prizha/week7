let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let mostfrequent = (arr) => {
let frequency = {};
let max = 0;
let result;
 for (let element of arr) {
    frequency[element] = (frequency[element] || 0) + 1;
    if (frequency[element] > max) {
        max = frequency[element];
        result = element;
    }
 }
 return result + " ( " + max + " times )";
};
console.log(mostfrequent(arr1));