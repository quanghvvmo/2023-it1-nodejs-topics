// 3.1
function concat(s1, s2) {
    return `${s1}${s2}`;
}

console.log(concat("Hello, ", "isla Ming"));

// 3.2
function sum(...arr) {
    return arr.reduce((previous, current) => previous + current, 0);
}
console.log(sum(1, 2, 3))

// 3.3
var arr = [ 10, 2, 5, 3, 9, 20, 8 ];

function sortArray(array) {
    if(array.length < 2) return array;
    
    const pivotIndex = array.length - 1;
    const pivot = array[pivotIndex];

    const left = [];
    const right = [];
    
    let currentItem;
    for(let i = 0; i < pivotIndex; i++) {
        currentItem = array[i];
        
        if(currentItem < pivot) {
            right.push(currentItem);
        } else {
            left.push(currentItem);
        }
    }

    return [...sortArray(left), pivot, ...sortArray(right)];
}

console.log(sortArray(arr));

// 3.4
function duplicatedContinuousChar(str){
    const map = new Map();
    let count = 1;
    for(var i = 0; i < str.length - 1; i++){
        if(str[i] === str[i + 1]) {
            count++;
            map[str[i]] = count;
        }
        else {
            count = 1;
            map[str[i + 1]] = count;
        } 
    }
    let result = '';
    for(var [key, value] of Object.entries(map)){
        result += `${key}${value}`;
    }
    return result;
}

console.log(duplicatedContinuousChar('aaaabbbdddccccchhgt'));

// 3.5
var product = {
    name: 'Dell precision 5540',
    model: 'DELL',
    year: 2021,
    price: {
        unitPrice: 350,
        tax: 25,
        discount: 10,
        total: 365
    }
};

console.log("Keys:", Object.keys(product));
console.log("Values:", Object.values(product));
for(var [key, value] of Object.entries(product)){
    console.log(`[Key: ${key}, Value: ${value}]`)
}




