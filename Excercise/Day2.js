//5.1
var users = [
    {
        username: 'test1',
        email: 'test1@vmodev.com',
        age: 20,
        status: 'inactive'
    },
    {
        username: 'test2',
        email: 'test2@vmodev.com',
        age: 25,
        status: 'inactive'
    },
    {
        username: 'test3',
        email: 'test3@vmodev.com',
        age: 26,
        status: 'inactive'
    }
]
//5.1.1
/*users = users.map((i) =>{
    i.age += 1;
    i.email = i.email.split('@')[0] + '@vmodev.com1'
    i.status = 'active'
    return i;
})*/

//5.1.2
let newUsers = users.filter(u => u.age < 28)
let newUsers2 = users.filter(u => u.status === 'active')
let newUsers3 = users.filter(u => u.age <25 && u.status ==='inactive')
//console.log(newUsers3);

//5.1.3
Object.entries(users).forEach(item =>{
    const[key, value] = item;
    console.log(key,value);
})

//5.2
var dob = 'https://localhost:8080?name=Nguyen Van A&age=20'
let value = dob.split('?')[1];
let s1 = value.split('&')[0];
let s2 = value.split('&')[1];
let name = s1.split('=')[1];
let age = s2.split('=')[1];
//console.log(name,age);

var object = { username: 'Nguyen Van A', age : 20 }


//5.3
var obj1 = {
    username: 'test10',
    email: 'test10@vmodev.com',
    age: 20
}
var obj2 = {
    status: 'inactive'
}
var obj3 = {
    company: 'VMO'
}
let combineObject = (a,b,c) => {
    var json1 = Object.assign({}, a, b)
    console.log(typeof(json1));
    var finalObj = Object.assign({}, json1,c);
    return finalObj
}
var newObj = combineObject(obj1,obj2,obj3);
//console.log(newObj);

//5.4
var users1 = [
    {
        username: 'test1',
        email: 'test1@vmodev.com',
        age: 20,
        status: 'inactive'
    },
    {
        username: 'test2',
        email: 'test2@vmodev.com',
        age: 25,
        status: 'inactive'
    }
]


var users2 = [
    {
        username: 'test2_1',
        email: 'test2_1@vmodev.com'
    }
]


var users3 = [
    {
        username: 'test3_1',
        status: 'inactive'
    },
    {
        username: 'test3_2',
        status: 'inactive'
    }
]

let combineArray = (a,b,c) => {
    let json1 = [...a,...b];
    let final = [...json1,...c]
    return final;
}
let oBjnew = combineArray(users1,users2,users3)
console.log(oBjnew);
