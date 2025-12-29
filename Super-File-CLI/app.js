const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//create folder if it doesn't exist
const docsPath = path.join(__dirname, "my_docs");
if (!fs.existsSync(docsPath)) {
  fs.mkdirSync(docsPath);
}

const showMenu = () => {
  console.log("\n--- File Manager CLI ---");
  console.log("1 : Create a File : ");
  console.log("2 : Read a File : ");
  console.log("3 : Delete a File : ");
  console.log("4 : Append to File : ");
  console.log("5 : Exit");

  handleInput();
};

const handleInput = () => {
  rl.question("Chooes an options : ", (option) => {
    switch (option) {
      case "1":
        createFile();
        break;
      case "2":
        readFile();
        break;
      case "3":
        deleteFile();
        break;
      case "4":
        appendFile();
        break;

      case "5":
        exit();
        break;

      default:
        console.log("please valid option select (1, 2, 3, 4)");
        break;
    }
  });
};

const createFile = () => {
  rl.question("Enter a File name (with extension): ", (fileName) => {
    rl.question("Enter a File content: ", (content) => {
      const fullPath = path.join(__dirname, "my_docs", fileName);
      fs.writeFile(fullPath, content, (err) => {
        if (err) console.log("❌ Error:", err.message);
        else console.log("File Created succesfully", fileName);
        showMenu();
      });
    });
  });
};

const readFile = () => {
  rl.question("Enter file name (with extension)", (fileName) => {
    const fullPath = path.join(__dirname, "my_docs", fileName);
    fs.readFile(fullPath, "utf-8", (err, data) => {
      if (err) console.log("❌ Error:", err.message);
      else console.log("File content : ", data);
      showMenu();
    });
  });
};

const deleteFile = () => {
  rl.question("Enter File Name (with extension)", (fileName) => {
    const fullPath = path.join(__dirname, "my_docs", fileName);
    fs.unlink(fullPath, (err) => {
      if (err) console.log("❌ Error: ", err);
      else console.log("File Succesfully Deleted ", fileName);
      showMenu();
    });
  });
};

const appendFile = () => {
  rl.question("Enter file Name (with extension)", (fileName) => {
    rl.question("Enter file content ", (content) => {
      const fullPath = path.join(__dirname, "my_docs", fileName);
      fs.appendFile(fullPath, content, (err) => {
        if (err) console.log("❌ Error: ", err);
        else console.log("Content Succesfully Append", fileName);
        showMenu();
      });
    });
  });
};

const exit = () => {
  console.log("Good Bye! ");
  rl.close();
};

showMenu();
