// concat methods
let names = ['Meraj','Aisha','Nabeel'];
let names2 = ['john', 'Tom'];
let names3 =['Harry','Smith']
// concat
let joined = names.concat(names2, names3);
console.log(joined); //[ 'Meraj', 'Aisha', 'Nabeel', 'john', 'Tom', 'Harry', 'Smith' ]

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2); // [1, 2, 3, 4]
let arr4 = arr1.concat(5, 6); // [1, 2, 5, 6]
console.log(arr3); // [1, 2, 3, 4]
