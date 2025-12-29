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
  //   if (option === "1") {
  //     // Add task logic write here
  //     rl.question("Enter you task : ", (task) => {
  //       todos.push(task);
  //       showMenu();
  //     });
  //   } else if (option === "2") {
  //     // view task logic write here
  //     console.log(" --- Task List --- ");
  //     todos.forEach((task, index) => {
  //       console.log(`${index + 1} : ${task}`);
  //     });
  //     showMenu();
  //   } else if (option === "3") {
  //     // rl close logic write here
  //     console.log("Good Bye!!");

  //     rl.close();
  //   } else {
  //     // handle wrong input
  //     console.log("please valid option select");
  //     showMenu();
  //   }
};

const showMenu = () => {
  console.log("\nTo-Do List Menu:");
  console.log("1 : Add a task");
  console.log("2 : View task");
  console.log("3 : Exits");
  rl.question("Choose an option ", handleInput);
};

showMenu();
