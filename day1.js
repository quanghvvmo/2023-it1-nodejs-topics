// 3.1
function templateLiterals(firstString, secondString) {
    return `${firstString} ${secondString}`;
}

// 3.2
function sum(...numbers) {
    const sum = numbers.reduce((total, number) => {
        return total + number;
    }, 0);
    return sum;
}

// 3.3
var arr = [10, 2, 5, 3, 9, 20, 8];

function sortArray(array) {
    array.sort((a, b) => a - b);
}

// 3.4
function countWords(string) {
    const countObj = {};
    for (let i = 0; i < string.length; i++) {
        if (!countObj[string[i]]) {
            countObj[string[i]] = 1;
        } else {
            countObj[string[i]] = countObj[string[i]] + 1;
        }
    }
    let result = "";
    for (const key in countObj) {
        result += key + countObj[key];
    }
    return result;
}

// 3.5
var product = {
    name: "Dell precision 5540",
    model: "DELL",
    year: 2021,
    price: {
        unitPrice: 350,
        tax: 25,
        discount: 10,
        total: 365,
    },
};

function print(myObject) {
    const keys = Object.keys(myObject);
    const values = Object.values(myObject);

    console.log("keys: " + keys);
    console.log("values: " + values);
    console.log(myObject);
}
print(product);
