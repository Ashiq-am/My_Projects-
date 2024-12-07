class Employee {
     constructor(name, salary) {
         this.name = name;
         this.salary = salary; // Directly accessible property
     }
 }
 
 const emp = new Employee("Ashiqul", 50000);
 
 // Access and update salary directly
 console.log(emp.salary); // Output: 50000
 
 emp.salary = 60000; // Update salary directly
 console.log(emp.salary); // Output: 60000
 
 emp.salary = -500; // Update with invalid value
 console.log(emp.salary); // Output: -500 (No validation here)
 