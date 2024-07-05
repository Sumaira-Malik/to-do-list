#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let todos: string[] = ["fruits", "juice", "cloths"];
console.log(chalk.magenta("\t **********************************THIS IS MY TODOS LIST************************************** \t"));
console.log(todos);
console.log(chalk.blue("\n \t *******************************************TODOS LIST***************************************** \t \n"));

async function createdTodo() {
  do {
    let ans = await inquirer.prompt({
      type: "list",
      message: chalk.italic("\t \n Select an operation \n \t"),
      name: "select",
      choices: ["Add", "Update", "View", "Delete", "Exit"]
    });

    if (ans.select == "Add") {
      let addTodo = await inquirer.prompt({
        type: "input",
        message: chalk.italic("\t Add items to your list \t"),
        name: "todo",
      });
      console.log(chalk.blue("\n \t *******************************************TODOS LIST***************************************** \t \n"));

      todos.push(addTodo.todo);
      console.log(chalk.blue("*************************************************************************************************"));

    }

    if (ans.select == "Update") {
      let updateTodo = await inquirer.prompt({
        type: "list",
        message: chalk.italic("\t \n Select an item to update \n \t"),
        name: "todo",
        choices: todos,
      });
      let newTodo = await inquirer.prompt({
        type: "input",
        message: chalk.italic("\t \n Enter new item \n \t"),
        name: "todo",
      });
      todos = todos.map((item) => (item === updateTodo.todo ? newTodo.todo : item));
    }

    if (ans.select == "View") {
      console.log(chalk.blue("\n \t *******************************************TODOS LIST***************************************** \t \n"));
      console.log(chalk.yellow(todos));
      console.log(chalk.blue("*************************************************************************************************"));
      
    }

    if (ans.select == "Delete") {
      let deleteTodo = await inquirer.prompt({
        type: "list",
        message: chalk.italic("\t Select an item to delete \t"),
        name: "todo",
        choices: todos,
      });
      todos = todos.filter((item) => item !== deleteTodo.todo);
      console.log(chalk.blue("\n \t *******************************************TODOS LIST***************************************** \t \n"));
      console.log(chalk.red(todos));
      console.log(chalk.blue("*************************************************************************************************"));

    }

    if (ans.select == "Exit") {
      break;
    }

    console.log(chalk.white(todos));
  } while (true);
}

createdTodo();
