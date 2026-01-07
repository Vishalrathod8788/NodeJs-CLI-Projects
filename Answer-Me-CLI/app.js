const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Ye function aaj ki taarik se lekar saal ke aakhri din
 * (31 Dec 2026) tak ke din calculate karega.
 */
function getDaysRemaining() {
  const today = new Date();
  const currentYear = today.getFullYear();

  // Saal ka aakhri pal: 31st Dec, 23:59:59
  const lastDayOfYear = new Date(currentYear, 11, 31, 23, 59, 59);

  // Milliseconds ka difference
  const diffInMs = lastDayOfYear - today;

  // Milliseconds ko days mein convert karna
  // (1000ms * 60s * 60m * 24h)
  const daysLeft = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  return { daysLeft, currentYear };
}

function showMenu() {
  console.log("\n--- 🤖 Answer Me CLI ---");
  console.log("1. What's the month?");
  console.log("2. What's the day?");
  console.log("3. What's the current year?");
  console.log("4. What's the date?");
  console.log("5. How many days remaining this year?");

  rl.question("\nSelect an option (1-5): ", handleInput);
}

function handleInput(choice) {
  const now = new Date();

  switch (choice) {
    case "1":
      console.log(
        `\n📅 Current Month: ${now.toLocaleString("default", {
          month: "long",
        })}`
      );
      break;

    case "2":
      console.log(
        `\n📆 Today is: ${now.toLocaleString("default", { weekday: "long" })}`
      );
      break;

    case "3":
      console.log(`\n⏳ Current Year: ${now.getFullYear()}`);
      break;

    case "4":
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      console.log(`\n📅 Today's Date: ${day}-${month}-${year}`);
      break;

    case "5":
      const { daysLeft, currentYear } = getDaysRemaining();
      console.log(
        `\n⏳ There are ${daysLeft} days remaining in ${currentYear}.`
      );
      break;

    default:
      console.log("\n❌ Invalid option. Restarting...");
      showMenu();
      return;
  }

  rl.close();
}

showMenu();
