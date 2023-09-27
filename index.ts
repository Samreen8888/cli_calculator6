import * as inquirer from "inquirer";
import chalk from "chalk";

// calculator operator

enum opearator

{
    Add = "Addition",
    Subtract = "Subtraction",
    Multiply = "multiplication",
    Divide = "Division",

}

const prompt = inquirer.createPromptModule();

function validateNumber(input: string): boolean | string 
{if (isNaN(parseFloat(input)))
    {
        return "Please enter a valid number"
    }
    return true;
}

async function main() 
{
const input = await prompt([
    {
    type: "input",
    name: "num1",
    message: "Please enter the first number:",
    validate: validateNumber,
},
{
    type: "rawlist", //or can use list;
    name: "operator",
    message: "Slect an operation:",
    choices: Object.values(opearator)
},
{
    type: "input",
    name: "num2",
    message: "Please enter the second number:",
    validate: validateNumber,

}

])

const num1 = parseFloat(input.num1);
const num2 = parseFloat(input.num2);
const slectedOperator= input.opearator as opearator
let result:number;

if(slectedOperator === opearator.Add)
{
    result = num1 + num2;
    console.log(chalk.green.bgBlackBright(`Result is : ${result}`));
}else if(slectedOperator === opearator.Subtract)
{
    result = num1 - num2;
    console.log(chalk.red.bgBlueBright(`Result is : ${result}`));
}else if(slectedOperator === opearator.Multiply)
{
    result = num1 * num2;
    console.log(chalk.white.bgGray(`Result is : ${result}`));
}else if (slectedOperator === opearator.Divide)
{
    result = num1 / num2;
    console.log(chalk.bgGreenBright.bgCyan(`Result is : ${result}`));
}

}
main()

