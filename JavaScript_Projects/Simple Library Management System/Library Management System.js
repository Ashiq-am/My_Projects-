// Define the Library Class
class Library {
     constructor() {
         this.books = []; // Array to store books
     }
 
     // Method to Add a Book
     addBook(bookName) {
         this.books.push(bookName);
         console.log(`"${bookName}" has been added to the library.`);
     }
 
     // Method to Remove a Book
     removeBook(bookName) {
         const index = this.books.indexOf(bookName);
         if (index !== -1) {
             this.books.splice(index, 1);
             console.log(`"${bookName}" has been removed from the library.`);
         } else {
             console.log(`"${bookName}" is not found in the library.`);
         }
     }
 
     // Method to Display All Books
     displayBooks() {
         if (this.books.length > 0) {
             console.log("Books currently in the library:");
             this.books.forEach((book, index) => {
                 console.log(`${index + 1}. ${book}`);
             });
         } else {
             console.log("The library is currently empty.");
         }
     }
 }
 
 // Create an Instance of Library
 const myLibrary = new Library();
 
 // Add Books
 myLibrary.addBook("The Great Gatsby");
 myLibrary.addBook("To Kill a Mockingbird");
 myLibrary.addBook("1984");
 
 // Display Books
 myLibrary.displayBooks();
 
 // Remove a Book
 myLibrary.removeBook("1984");
 
 // Display Books After Removal
 myLibrary.displayBooks();
 
 // Attempt to Remove a Book That Doesn't Exist
 myLibrary.removeBook("Harry Potter");
 
 // Display Books Again
 myLibrary.displayBooks();
 