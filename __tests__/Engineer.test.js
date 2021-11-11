const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    test("Can instantiate Engineer instance", () => {
        const e = new Engineer();
        expect (typeof e).toBe("object");
    });

    test("Can retrieve Github name using constructor argument", () => {
        const testValue = "GitHubUser"
        const e = new Engineer("Mike", 1, "mike@gmail.com", testValue);
        expect(e.github).toBe(testValue);
    });

    test("Will getRole() say engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Mike", 1, "mike@gmail.com");
    expect(e.getRole()).toBe(testValue);
});

    test("Whether getGethub() will retrieve the github user name", () => {
        const testValue = "GitHubUser";
        const e = new Engineer("Mike", 1, "mike@gmail.com", testValue);
        expect(e.getGithub()).toBe(testValue);
    });
});