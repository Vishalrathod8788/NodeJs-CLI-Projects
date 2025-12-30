const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalBill = 0;

const menu = {
  starter: [
    { name: "Soup", price: 538 },
    { name: "Salad", price: 444 },
    { name: "Bruschetta", price: 799 },
    { name: "GarlicBread", price: 449 },
  ],
  mainCourse: [
    { name: "grilledChicken", price: 1079 },
    { name: "beefSteak", price: 1618 },
    { name: "pastaCarbonara", price: 1438 },
    { name: "vegetableCurry", price: 1078 },
    { name: "chickenAlfredo", price: 1258 },
    { name: "mushroomRisotto", price: 1348 },
    { name: "shrimpScampi", price: 1528 },
    { name: "tofuTeriyaki", price: 1168 },
    { name: "salmon", price: 1499 },
  ],

  dessert: [
    { name: "chocolateCake", price: 629 },
    { name: "Cheesecake", price: 719 },
    { name: "Tiramisu", price: 808 },
    { name: "IceCreamSundae", price: 539 },
  ],
};

const showMenu = () => {
  console.log("\n--- Restaurant Menu CLI ---");
  console.log("1 : Starters");
  console.log("2 : Main Course");
  console.log("3 : Desserts");
  console.log("4 : Total");
  console.log("5 : Exit");
  rl.question("Choose an items : ", (option) => {
    switch (option) {
      case "1":
        orderFromCategory("starter");
        break;
      case "2":
        orderFromCategory("mainCourse");
        break;
      case "3":
        orderFromCategory("dessert");
        break;
      case "4":
        console.log(`\n============================`);
        console.log(`Total Amount: ₹${totalBill}`);
        console.log(`============================`);
        showMenu();
        break;
      case "5":
        console.log("Thank you! Goodbye! 👋");
        rl.close();
        break;

      default:
        console.log("Invalid option!");
        showMenu();
        break;
    }
  });
};

// Dynamic Category Function

const orderFromCategory = (categoryKey) => {
  const items = menu[categoryKey];
  console.log(`\n--- ${categoryKey.toUpperCase()} ---`);

  items.forEach((item, index) => {
    console.log(`${index + 1} : ${item.name} - ₹${item.price}`);
  });

  console.log(`${items.length + 1} : Back to Main menu`);

  rl.question("\nSelect an item to add to your order: ", (choice) => {
    const index = parseInt(choice) - 1;

    if (index >= 0 && index < items.length) {
      const selectedItem = items[index];
      console.log(`You selected: ${selectedItem.name}`);
      totalBill += selectedItem.price;
      console.log(`Total Amount: ₹${totalBill}`);
      showMenu();
    } else if (index === items.length) {
      console.log(items.length);
      showMenu();
    } else {
      console.log("Invalid choice. Please select a valid option.");
      orderFromCategory(categoryKey);
    }
  });
};

showMenu();
