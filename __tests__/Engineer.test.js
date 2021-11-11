const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Engineer", () => {
    test("Can instantiate Engineer instance", () => {
        const e = new Employee();
        expect (typeof e).toBe("object");
    });

    test("Can set office number using constructor argument", () => {
        const testValue = 3000;
        const e = new Manager("Jane", 1, "jane@gmail.com", testValue);
        expect(e.officeNumber).toBe(testValue);
    });
});