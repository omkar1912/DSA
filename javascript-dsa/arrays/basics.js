//Declaration 

const myArray = [1, 2, 3, 4, 5];

//Accessing all the elements of the Array
//console.log('Accessing all the elements of the array');
for (let n of myArray) {
    //console.log(n);
}

//Finding the Length of an array
//console.log('Displaying the length of the array');
//console.log(myArray.length);

//Creating a new empty array of fix length;

const newArray = new Array(5);
//console.log('Creating a new empty array of the fix Length');
//console.log(newArray);

//Creating a new Array with the Array.from() method.

const newArray1 = Array.from({ length: 5}, (_, index) => index + 1);

//console.log('Creating a new Array With the Array.from() method');
//console.log(newArray1);


const newArray2 = Array.from({ length: 10 }, (_, index) => index * 2);
//console.log('Creating a new Array With the Array.from() method');
//console.log(newArray2);


//Inserting a new element in the end of the Array
//console.log('Inserting a new element in the end of the array');
myArray.push(6);
//console.log(myArray);

//Inserting a new element in the beginning of the Array
//console.log('Inserting a new element in the beginning of the Array');
myArray.unshift(0);
//console.log(myArray);

//Removing the Last element of the Array
//console.log('Removing the last element of the Array'); 
myArray.pop();
//console.log(myArray);

//Removing the first element of the Array
//console.log('Removing the First element of the array');
myArray.shift();
//console.log(myArray);

//Finding the Index of an element in the array
//console.log('Finding the Index of an element in the array');
const index = myArray.indexOf(3);
//console.log('The index of 3 in the array is: ' + index);

//Check the existence of an element in the array
//console.log('Check the existence of an element in the array'); 
const isPresent = myArray.includes(4);
//console.log('Is 4 present in the array ? ' + isPresent);

//Use Slice() method to get a portion of the array
//console.log('Use Slice() method to get a portion of the array');
const slicedArray = myArray.slice(2, 4);
//console.log('The Sliced array is : ' + slicedArray);

//Use Splice() method to remove elements from the Array
//console.log('Use Splice() method to remove elements from the Array');
const splicedArray = myArray.splice(1, 2);
//console.log('The Spliced array is : ' + splicedArray);
//console.log('The original array after splicing is : ' + myArray);

//Use splice method to add elements to the Array
//console.log('Use splice method to add elements to the Array');
myArray.splice(1, 2, 10);
//console.log('The original Array after adding elements is : ' + myArray);


//Function to add elements to the specified index of the array

function addElementAtIndex(array, index, element) {
    array.splice(index, 0, element);
    return array;
}

//console.log('Adding an element at the specified index of the array');
const updatedArray = addElementAtIndex(myArray, 0, 20);
//console.log('The updated array is : ' + updatedArray);

//Function to Delete the element at the specified index
const deleteElementAtIndex = (array, index, deleteCount = 1) => {
    array.splice(index, deleteCount);
    return array;
}

//console.log('Deleting an element from the index point');
const deleteArray = deleteElementAtIndex(myArray, 1, 1);
//console.log('The Updated array is : ' + deleteArray);


//Remove the Element of the array by value
const deleteByValue = (array, value) => {
    const index = array.indexOf(value);
  //  console.log('index: ' + index);
    if (index !== -1) {
        array.splice(index, 1);
    }

    return array;
}

// console.log('Current array is ' + myArray);
// console.log('Deleting an array element by value ');
// const deleteValue = deleteByValue(myArray, 20);
// console.log('Updated Array is ' + myArray);



// Practical 2

// Creating an array from array.from

const arr = Array.from({ length: 5 }, (_,index) => index + 10);

// console.log('Created an array from array.from ', arr);



const newarray = Array.from({ length: 10 }, (_, index) => index + 5);
//console.log(`Created an aarray from the array from  ${newarray}`);

//=========================================================================================================

//Checking the if we remove the element from the array then will it remove the key Also or just element.

let array1 = [1,2,3,4,5,6,7,8,9]

let target = 5;

let index1 = array1.indexOf(target);

console.log(`Index of Number 5 is ${index1}`);

array1.splice(index1, 1);

array1.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
});

