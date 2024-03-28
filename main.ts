#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let mybalance = 10000; //dollar
let mypin = 2684;

console.log(chalk.cyanBright("Welcome"));

let pinanswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: chalk.magenta("Please Enter Your 4-Digit Pin Code"),
  },
]);

if (mypin === pinanswer.pin) {
  console.log(chalk.yellowBright("Correct Pin Code"));

  let operationans = await inquirer.prompt([
    {
      name: "operation",
      message: "Select Any One OF The Operations",
      type: "list",
      choices: ["withdraw", "checkbalance", "fastcash"],
    },
  ]);

  if (operationans.operation === "withdraw") {
    let amountans = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: chalk.red("Please Enter Your Amount"),
      },
    ]);
    if (mybalance >= amountans.amount) {
      mybalance -= amountans.amount;
      console.log(chalk.greenBright(`Your Remaining Amount Is ${mybalance} `));
    } else {
      console.log(
        chalk.magentaBright(
          `Unable To Get Transaction Your Balance Is Insufficient`
        )
      );
    }
  } else if (operationans.operation === "checkbalance") {
    console.log(chalk.italic.greenBright(`your amount is ${mybalance}`));
  } else if (operationans.operation === "fastcash") {
    let fastcashans = await inquirer.prompt([
      {
        name: "fastcash",
        message: "please select your amount",
        type: "list",
        choices: ["2000", "5000", "10000", "15000", "20000"],
      }
    ]);
    if (mybalance >= fastcashans.fastcash) {
      mybalance -= fastcashans.fastcash;
      console.log(chalk.greenBright(`Your Remaining Amount Is ${mybalance}`));
    } else {
      console.log(
        chalk.cyanBright`Unable To Get Transaction Your Balance Is Insufficient`
      );
    }
  } //end
} else {
  console.log(chalk.blueBright("Incorrect Pin Code"));
}
