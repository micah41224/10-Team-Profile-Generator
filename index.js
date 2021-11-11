const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [
    new Manager("Mike", 1, "mike@gmail.com"),
    new Engineer("Jane", 2, "jane@yahoo.com"),
    new Engineer("Jeff", 3, "jeff@jeff.com"),
    new Intern("Blake", 1, "blake@gmail.com")
    {
        name: "Jane",
        id: 2,
        email: "jane@yahoo.com",
        role: "engineer"
    },
    {
        name: "Jeff",
        id: 2,
        email: "jeff@jeff.com",
        role: "engineer"
    },
    {
        name: "Blake",
        id: 3,
        email: "blake@gmail.com",
        role: "intern"
    },
];

fs.writeFileSync(outputPath, render(team), "utf-8");
// console.log();