import chalk from "chalk";
import inquirer from "inquirer";
const input = await inquirer.prompt([
  {
    name: "english",
    message: "Enter english marks",
    type: "number",
  },
  {
    name: "urdu",
    type: "number",
    message: "Enter urdu marks",
  },
  {
    name: "physics",
    message: "Enter pyysics marks",
    type: "number",
  },
  {
    name: "chemistry",
    message: "Enter chemistry marks",
    type: "number",
  },
])
let obtainedmarks=input.english+input.urdu+input.physics+input.chemistry;
let totalmarks:number=400
let percentage:number=(obtainedmarks/totalmarks)*100;
console.log(chalk.yellow("TOTAL MARKS OBTAINES BY STUDENT:" +obtainedmarks));
console.log(chalk.greenBright("TOTAL MARKS:" + totalmarks));
console.log(chalk.cyan("PERCENTAGE:" +percentage));
if (percentage>=80){
    console.log(chalk.yellow("GRADE A+"));
}else if (percentage>=70){
    console.log(chalk.green("GRADE A"));

}else if (percentage>=60){
    console.log(chalk.blue("GRADE B"));
}else if (percentage>=50){
    console.log(chalk.magenta("GRADE C"));
}else {
    console.log(chalk.red("CONGRATS YOU ARE FAIL"));
} 