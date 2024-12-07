var arr = ["PS5","FC25",{name:"Ashiq", address:["Mirpur","Kathalbagan",["Noakhali","Sonapur"]]}];
console.log(arr);
console.log(arr[2]);
console.log(arr[2]["address"]);
console.log(arr[2].address);
console.log(arr[2].address[2]);
console.log(arr[2]["address"][2][0]);

var obj = {property_1:"Dhanmondi", property_2:"Mirpur", property_3:["Land of Kathalbagan","Land of Kafrul"]};
console.log(obj);
console.log(obj["property_1"]);
console.log(obj.property_1);

console.log(obj["property_2"]);
console.log(obj.property_2);

console.log(obj.property_3);
console.log(obj["property_3"]);

console.log(obj.property_3[0]);
console.log(obj["property_3"][0]);

console.log(obj.property_3[1]);
console.log(obj["property_3"][1]);