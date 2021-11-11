const render = require("./src/page-template.js");
const fs = require("fs");
// const inquirer = require("inquirer");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { inherits } = require("util");
const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [];


// const team = [
//     new Manager("Mike", 1, "mike@gmail.com", 1234),
//     new Engineer("Jane", 2, "jane@yahoo.com", "micah41224"),
//     new Engineer("Jeff", 3, "jeff@jeff.com", "micah41224"),
//     new Intern("Blake", 4, "blake@gmail.com", "Georgia Tech")
// ];



function writeFile(team) {
    fs.writeFileSync(outputPath, render(team), "utf-8");
}

function init() {
    //inquirer
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "what is the team manager's id?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/    
                );
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than zero.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
             }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a positive number greater than zero.";
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        writeFile(team);
    });
}



// const team = [
//     new Manager("Mike", 1, "mike@gmail.com", 1234),
//     new Engineer("Jane", 2, "jane@yahoo.com", "micah41224"),
//     new Engineer("Jeff", 3, "jeff@jeff.com", "micah41224"),
//     new Intern("Blake", 4, "blake@gmail.com", "Georgia Tech")
// ];

init()