var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");


var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon"

});

connection.connect(function(err){
	if(err){throw err;}
	else{
		console.log("Connected as ID: " + connection.threadId);
		displayItems();
	}
})

function displayItems(){
			  connection.query("SELECT * FROM products", function(err, res) {
		    if (err){throw err;}
		    else{
		    console.table(res);
		    }
		    customerOrder();
		  });
}

function customerOrder(){
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "product",
          type: "rawlist",
          choices: function() {
            var productArray = [];
            for (var i = 0; i < results.length; i++) {
              productArray.push(results[i].product_name);
            }
            return productArray;
          },
          message: "What item would you like to purchase today?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How much would you like to purchase?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.product) {
            chosenItem = results[i];
          }
        }

        // determine if bid was high enough
        console.log(chosenItem.stock_quantity);
        console.log(answer.quantity);
        if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
          // bid was high enough, so update db, let the user know, and start over
          var newQuantity = (chosenItem.stock_quantity - answer.quantity);
          var purchaseTotal = (chosenItem.price * answer.quantity);
          var total = purchaseTotal.toFixed(2);
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newQuantity
              },
              {
                item_ID: chosenItem.item_ID
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Product Purchased Successfully! \nYour purchase total came to: $"+ total);
              customerOrder();
            }
          );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Insufficient Quantity Available! Try Again!");
          customerOrder();
        }
      });
  });
}