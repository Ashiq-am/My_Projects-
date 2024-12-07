// Define the ShoppingCart Class
class ShoppingCart {
     constructor() {
         this.products = []; // Array to store products
     }
 
     // Method to Add a Product
     addProduct(productName, price) {
         this.products.push({ name: productName, price: price });
         console.log(`"${productName}" has been added to the cart. Price: $${price}`);
     }
 
     // Method to Remove a Product
     removeProduct(productName) {
         const index = this.products.findIndex(product => product.name === productName);
         if (index !== -1) {
             const removedProduct = this.products.splice(index, 1);
             console.log(`"${removedProduct[0].name}" has been removed from the cart.`);
         } else {
             console.log(`"${productName}" is not found in the cart.`);
         }
     }
 
     // Method to Calculate Total Price
     calculateTotal() {
         const total = this.products.reduce((sum, product) => sum + product.price, 0);
         console.log(`Total Price: $${total}`);
         return total;
     }
 
     // Method to Display All Products
     displayProducts() {
         if (this.products.length > 0) {
             console.log("Products in your cart:");
             this.products.forEach((product, index) => {
                 console.log(`${index + 1}. ${product.name} - $${product.price}`);
             });
         } else {
             console.log("Your shopping cart is empty.");
         }
     }
 }
 
 // Create an Instance of ShoppingCart
 const myCart = new ShoppingCart();
 
 // Add Products
 myCart.addProduct("Laptop", 1000);
 myCart.addProduct("Smartphone", 700);
 myCart.addProduct("Headphones", 150);
 
 // Display Products
 myCart.displayProducts();
 
 // Calculate Total Price
 myCart.calculateTotal();
 
 // Remove a Product
 myCart.removeProduct("Smartphone");
 
 // Display Products After Removal
 myCart.displayProducts();
 
 // Calculate Total Price After Removal
 myCart.calculateTotal();
 
 // Attempt to Remove a Non-Existent Product
 myCart.removeProduct("Tablet");
 