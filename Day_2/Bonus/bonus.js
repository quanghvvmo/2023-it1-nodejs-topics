const users = require('./users');

function mapUsers(users) {
    users.map((user) => {
        user.age += 1;
        user.email = user.email.replace(/(\w{0})[\w.-]+@([\w.]+\w)/, "$1*****@$2");
        user.status = 'active'
    })
    console.log(users)
}

function filter(users) {
    console.log('Users of age smaller than 28: ', users.filter(user => user.age < 28));
    console.log('Active users: ', users.filter(user => user.status === 'active'));
    console.log('Users of age smaller than 25 and being active: ', users.filter(user => user.age < 25 && user.status === 'active'));
}

function forEach(users) {
    users.forEach((user) => {
        Object.keys(user).forEach(key => {
            console.log(key + ' - ' + user[key]);
        })
        console.log()
    })
}

function getParamsJson(url) {
    let params = url.split('?')[1].split('&');
    let res = {};
    params.forEach((param) => {
        res[param.split('=')[0]] = param.split('=')[1];
    })
    return res;
}

function mergeObjects(...objects) {
    let res = {}
    objects.forEach((object) => {
        res = { ...res, ...object };
    })
    return res;
}

function mergeArrays(...arrays) {
    let res = []
    arrays.forEach((array) => {
        res = [ ...res, ...array];
    })
    return res;
}

// mapUsers(users);
// filter(users);
// forEach(users);
//
// var dob = 'https://localhost:8080?name=Nguyen Van A&age=20';
// console.log(getParamsJson(dob));
// console.log(dob.replace('name', 'fullname'));
// console.log(dob.replace(' ', '%20'));

// var obj1 = {
//     username: 'test1',
//     email: 'test1@vmodev.com',
//     age: 20
// }

// var obj2 = {
//     status: 'inactive'
// }

// var obj3 = {
//     company: 'VMO'
// }

// console.log(mergeObjects(obj1, obj2, obj3));

// var users1 = [
//     {
//         username: 'test1',
//         email: 'test1@vmodev.com',
//         age: 20,
//         status: 'inactive'
//     },
//     {
//         username: 'test2',
//         email: 'test2@vmodev.com',
//         age: 25,
//         status: 'inactive'
//     }
// ]


// var users2 = [
//     {
//         username: 'test2_1',
//         email: 'test2_1@vmodev.com'
//     }
// ]


// var users3 = [
//     {
//         username: 'test3_1',
//         status: 'inactive'
//     },
//     {
//         username: 'test3_2',
//         status: 'inactive'
//     }
// ]

// console.log(mergeArrays(users1, users2, users3));