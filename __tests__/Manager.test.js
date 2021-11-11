const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    test("Can instantiate Manager instance", () => {
        const e = new Manager();
        expect (typeof e).toBe("object");
    });

    test("Will getRole() say manager", () => {
        const testValue = "Manager";
        const e = new Manager("Mike", 1, "mike@gmail.com", 12);
        expect(e.getRole()).toBe(testValue);
    });

    test("Can set office number using constructor argument", () => {
        const testValue = "12"
        const e= new Manager("Mike", 1, "mike@gmail.com", testValue);
        expect(e.officeNumber).toBe(testValue);
    });

    test("Can retrieve manager's office number using getOfficeNumber()", () => {
        const testValue = "12";
        const e = new Manager("Mike", 1, "mike@gmail.com", testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
    });
});