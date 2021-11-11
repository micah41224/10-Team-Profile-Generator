const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect (typeof e).toBe("object");
    });

test("Can set name via constructor arguments", () => {
    const name = "Jane"
    const e = new Employee(name);
    expect(e.name).toBe(name);
});
});

