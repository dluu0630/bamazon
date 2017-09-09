var inquirer = require("inquirer");
var mysql = require("mysql");

// Connects to MySQL DB
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Semper86",
    database: "bamazonDB"
});

// Establishes connection
connection.connect(function(err) {
    if (err) throw err;
});

connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    
    console.log("Item Number | Product Name | Department | Price | Quantity");

    //Loop through all the rows and print out their column values
    for (var i = 0; i < res.length; i++){
    	if (i < 9){
    		console.log(" " + res[i].item_id + "          | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    	}
    	else if (i >= 9){
    		console.log(res[i].item_id + "          | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    	}
    }

    userSelection();
});

var userSelection = function(){
    
        // ID Prompt
        inquirer.prompt([{
            name: "item_id",
            message: "Enter ID number of item.",
    
            // Number Verification
            validate: function(value){
                if (isNaN(value) == false) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },{
    
            // Amount Prompt
            name: "purchaseAmount",
            message: "How many would you like to purchase?",
    
            // Number Verification
            validate: function(value){
                if (isNaN(value) == false) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }]).then(function(answers){
    
                // Set userinput to selectedItem and selectedAmount
                var selectedItem = answers.item_id;
                var selectedAmount = answers.purchaseAmount;
    
                //Read DB. Perform Transaction if enough quantity.
                connection.query('SELECT * FROM products WHERE ?',{
                    item_id: answers.item_id
                },function(err, res){
    
                    // Return to main prompt if not enough in stock.
                    if (selectedAmount > res[0].stock_quantity){
                        console.log("Insufficient quantity!");

                        userSelection();
                    }
                    else { 
                        console.log("You have successfully purchased your items.");
    
                        // Update quantity in DB
                        var newQuantity = (res[0].stock_quantity - selectedAmount);
                        var totalCost = res[0].price * selectedAmount;
    
                        connection.query('UPDATE products SET ? WHERE ?',[{
                            stock_quantity: newQuantity
                        },{
                            item_id: selectedItem
                        }], function(err, res){
                            console.log("You total bill is $" + totalCost);
                            console.log("Thank you! Come Again!")

                            userSelection();
                        });
                    }
                })
           })
    }   