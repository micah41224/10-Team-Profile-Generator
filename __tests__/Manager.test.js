const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

describe("Manager", () => {
    test("Can instantiate Manager instance", () => {
        const e = new Employee();
        expect (typeof e).toBe("object");
    });

});