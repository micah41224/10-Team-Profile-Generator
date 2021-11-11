const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [
    new Manager("Mike", 1, "mike@gmail.com", 1234),
    new Engineer("Jane", 2, "jane@yahoo.com", "micah41224"),
    new Engineer("Jeff", 3, "jeff@jeff.com", "micah41224"),
    new Intern("Blake", 4, "blake@gmail.com", "Georgia Tech")
];

fs.writeFileSync(outputPath, render(team), "utf-8");
// console.log();