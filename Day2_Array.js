var users = [
    {
        username: 'test1',
        email: 'test1vmodev.com',
        age: 20,
        status: 'inactive'
    },
    {
        username: 'test2',
        email: 'test2vmodev.com',
        age: 25,
        status: 'inactive'
    },
    {
        username: 'test3',
        email: 'test3vmodev.com',
        age: 26,
        status: 'inactive'
    }
]

var map1 = users.map((user) =>{
    user.email = user.email.replace('vmodev.com','@vmodev.com')
    user.age = user.age+1
    return [user.age,user.email,user.status = 'active']
})

//console.log(users.filter(user =>user.age<28))
//console.log(users.filter(user =>user.status==='active'))
//console.log(users.filter(user =>user.status==='inactive'&&user.age<25))

/*users.forEach(user =>{
    console.log('key: '+ Object.keys(user)+ 'value: '+ Object.values(user))
})
*/

var dob = 'https://localhost:8080?name=Nguyen Van A&age=20'
dob.replace('name','fullname')
console.log(dob.replace(' ','%20'))


