#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    { message: "Enter Your First Value", type: "number", name: "FirstNumber" },
    { message: "Enter Your Second Value", type: "number", name: "SecondNumber" },
    {
        message: "Select One Of The Operators To Operate:",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Select Valid Operator");
}
console.log("Congrats! You've Got Your Answer");
