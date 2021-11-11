// const { identifier } = require("@babel/types");
const render = require("./src/page-template.js");
const team = [
    {
        name: "Mike",
        id: 1,
        email: "mike@gmail.com",
        role: "manager"
    },
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
]


console.log(render(team));