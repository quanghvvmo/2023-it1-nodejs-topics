
//3.1
let conCat = (a,b) => {
    return `${a} + ${b}`;
}
console.log(conCat('Hello', 'Word'));

//3.2
let sumFunction = (n) => {
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(sumFunction(7));

//3.3
var arr = [ 10, 2, 5, 3, 9, 20, 8 ];
let sortArray = (array) => {
    for(let i = 0; i<= array.length -1; i ++){
        for(let j = array.length -1; j > i; j--){
            if(array[j] < array[j-1]){
                let min = array[j];
                array[j] = array[j-1];
                array[j-1] = min;
            }
        }
    }
}
sortArray(arr);
console.log(arr);

//3.4
/* aaaabbbdddccccchhgt  kết quả in ra là -> a4b3d3c5h2g1t1  
aabddccc  kết quả in ra là -> a2b1d2c3 */ 
let str = "aaaabbbdddccccchhgt";
let arr1 = str.split('');
var count = {};
arr1.forEach(function(i) { count[i] = (count[i]|| 0) + 1;});
/**
{a: 4, b: 3, d: 3, c: 5, h: 2, g:1, t:1}
 */
let newStr = "";
for (let key in count) {
    newStr += key + count[key];
}
console.log(newStr);





//3.5
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
}
console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));
