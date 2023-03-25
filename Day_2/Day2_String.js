var dob = 'https://localhost:8080?name=Nguyen Van A&age=20'

dob.replace('name','fullname')

let toObject = (x)=>{
    let query = x.split('?')[1].split('&');
    let object = query.forEach(i=>{
        i.split('=')[0] = i.split('=')[1]
    })
    console.log(object)
}

var obj1 = {
    username: 'test1',
    email: 'test1@vmodev.com',
    age: 20
}


var obj2 = {
    status: 'inactive'
}


var obj3 = {
    company: 'VMO'
}
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

let mergeObject = (obj1,obj2,obj3) => {
    return {...obj1,...obj2,...obj3}
};
let mergeArray = (arr1,arr2,arr3) => {
    return (arr1.concat(arr2)).concat(arr3)
};

console.log(mergeArray(users1,users2,users3));

