let score = 78;
let attendedClasses = false;

if (score >= 80) { // First condition: Grade is B or higher
  if (attendedClasses) { // Second condition: Classes attended
    console.log("Grade: A");
  } else {
    console.log("Grade: B (because attendance is low)");
  }
} else if (score >= 60) {
  if (attendedClasses) {
    console.log("Grade: B");
  } else {
    console.log("Grade: C (because attendance is low)");
  }
} else {
  console.log("Grade: F");
}
