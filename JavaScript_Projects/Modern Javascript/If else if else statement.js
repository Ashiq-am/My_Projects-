var username = "ashiqul";
var password = "@ashiq12345";
var isAdmin = true;

if (username === "ashiqul") { // First condition: Check username
  if (password === "@ashiq12345") { // Nested condition: Check password
    if (isAdmin) { // Nested condition: Check if user is an admin
      console.log("Welcome, Admin!");
    } else {
      console.log("Welcome, User!");
    }
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("Username not found.");
}
