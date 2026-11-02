//Code Statement. There is an given positive integer Array where you have to print the value  after the current integer seconds and then next integer seconds like till the ends.
//Input: [1,2,3,4,5]
//Output : 1 should print after 1 second 2 should print after 2 second 3 should print after 3 second 4 should print after 4 second 5 should print after 5 second.
//Use promise

const sleep = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));    
}

async function printNumbers(array) {
    

    console.log(new Date().toLocaleTimeString());
    for (let i = 0; i < array.length; i++){
        await sleep(array[i]).then(() => console.log(array[i], new Date().toLocaleTimeString()));
    }
}

printNumbers([5, 1, 4, 2, 6, 3]);

