const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect (typeof e).toBe("object");
    });

test("Can set name via constructor argument", () => {
    const name = "Jane"
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("John", testValue);
    expect(e.id).toBe(testValue);
})

test("Can get name via getName()", () => {
    const testValue = "Jane";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Set email va constructor arguement", () => {
    const testValue = "mike@gmail.com";
    const e = new Employee("Mike", 1, testValue);
    expect(e.email).toBe(testValue);
});
});