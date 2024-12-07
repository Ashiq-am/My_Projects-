class Employee {
     constructor(name, salary) {
         this.name = name;
         this._salary = salary; // Private-like property
     }
 
     // Getter
     get salary() {
         return this._salary;
     }
 
     // Setter
     set salary(amount) {
         if (amount > 0) {
             this._salary = amount;
         } else {
             console.log("Invalid salary amount!");
         }
     }
 }
 
 const emp = new Employee("Ashiqul", 50000);
 console.log(emp.salary); // Output: 50000
 
 emp.salary = 60000; // Update salary
 console.log(emp.salary); // Output: 60000
 
 emp.salary = -500; // Invalid salary
 // Output: Invalid salary amount!