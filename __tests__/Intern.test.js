const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    test("Can instantiate Intern instance", () => {
        const e = new Intern();
        expect (typeof e).toBe("object");
    });

    test("Will getRole() say intern", () => {
        const testValue = "Intern";
        const e = new Intern("Mike", 1, "mike@gmail.com");
        expect(e.getRole()).toBe(testValue);
    });

    test("Can set school using constructor argument", () => {
        const testValue = "GT"
        const e= new Intern("Mike", 1, "mike@gmail.com", testValue);
        expect(e.school).toBe(testValue);
    });

    test("Can retrieve school using getSchool()", () => {
        const testValue = "GT";
        const e = new Intern("Mike", 1, "mike@gmail.com", testValue);
        expect(e.school).toBe(testValue);
    });


});