// 5.1
const users = [
    {
        username: "test1",
        email: "test1@vmodev.com",
        age: 20,
        status: "inactive",
    },
    {
        username: "test2",
        email: "test2@vmodev.com",
        age: 25,
        status: "inactive",
    },
    {
        username: "test3",
        email: "test3@vmodev.com",
        age: 26,
        status: "inactive",
    },
];

// 5.1.1
const updatedUsers = users.map((user) => {
    return {
        ...user,
        age: user.age + 1,
        email: "*****@vmodev.com",
        status: "active",
    };
});

// 5.1.2
const below28Users = users.filter((user) => user.age < 28);
const activeUsers = users.filter((user) => user.status === "active");
const inactiveBelow25Users = users.filter((user) => user.age < 25 && user.status === "inactive");

// 5.1.3
users.forEach(function (user) {
    Object.entries(user).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
});

// 5.2
const dob = "https://localhost:8080?name=Nguyen Van A&age=20";

function getParams(url) {
    const queryString = url.split("?")[1];
    const params = queryString.split("&");
    let result = {};
    for (let i = 0; i < params.length; i++) {
        result[params[i].split("=")[0]] = params[i].split("=")[1];
    }

    return JSON.stringify(result);
}
const replacedURL = dob.replace("name", "fullname").replace(/ /g, "%20");

// 5.3
var obj1 = {
    username: "test1",
    email: "test1@vmodev.com",
    age: 20,
};

var obj2 = {
    status: "inactive",
};

var obj3 = {
    company: "VMO",
};

function mergeObjects(obj1, obj2, obj3) {
    return { ...obj1, ...obj2, ...obj3 };
}

// 5.4
var users1 = [
    {
        username: "test1",
        email: "test1@vmodev.com",
        age: 20,
        status: "inactive",
    },
    {
        username: "test2",
        email: "test2@vmodev.com",
        age: 25,
        status: "inactive",
    },
];

var users2 = [
    {
        username: "test2_1",
        email: "test2_1@vmodev.com",
    },
];

var users3 = [
    {
        username: "test3_1",
        status: "inactive",
    },
    {
        username: "test3_2",
        status: "inactive",
    },
];

function mergeArrays(users1, users2, users3) {
    return [...users1, ...users2, ...users3];
}
