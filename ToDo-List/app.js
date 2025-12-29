const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = [];

const handleInput = (option) => {
  switch (option) {
    case "1":
      rl.question("Enter your task: ", (task) => {
        if (task.trim()) {
          todos.push(task);
        } else {
          console.log("Task cannot be empty!");
        }
        showMenu();
      });
      break;
    case "2":
      console.log("\n --- YOUR TASK LIST ---");
      if (todos.length === 0) {
        console.log("Empty!, Nothing to do.");
      } else {
        todos.forEach((task, index) => {
          console.log(`${index + 1}. ${task}`);
        });
      }
      showMenu();
      break;
    case "3":
      console.log("Good Bye! have a productive day!");
      rl.close();
      break;
    default:
      console.log("Invalid option! Please select 1, 2 or 3.");
      showMenu();
      break;
  }
};

const showMenu = () => {
  console.log("\nTo-Do List Menu:");
  console.log("1 : Add a task");
  console.log("2 : View task");
  console.log("3 : Exits");
  rl.question("Choose an option ", handleInput);
};

showMenu();
