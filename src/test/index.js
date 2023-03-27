function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("Unit test", function () {
    beforeEach(function () {
       console.log("running something before each test");
    });

    importTest("Employee", './employee');
    importTest("User", './user');

    after(function () {
        console.log("after all tests");
    });
});