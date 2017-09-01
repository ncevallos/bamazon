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
		displayOptions();
	}
})
function displayOptions(){
	  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "action",
          type: "rawlist",
          choices: ["View Products for Sale", "View Low Inventory(Less Than 5", "Add to Inventory", "Add New Product", "Exit Program"
          ],
          message: "Good Day Boss! What Would you like to do today?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
      switch (answer.action) {
        case "View Products for Sale":
          displayItems();
          break;

        case "View Low Inventory":
          viewLowInven();
          break;

        case "Add to Inventory":
          addInventory();
          break;

        case "Add New Product":
          addProduct();
          break;

        case "Exit Program":
          exitProgram();
          break;
      }


      });
  });
}
function exitProgram(){

	console.log("Have a Good Day!")

		    connection.end();
}
function displayItems(){
			  connection.query("SELECT * FROM products", function(err, res) {
		    if (err){throw err;}
		    else{
		    console.table(res);
		    }
		    displayOptions();
		  });
}
function viewLowInven(){
		  connection.query("SELECT * FROM products WHERE stock_quantity <= '5'", function(err, res) {
		    if (err){throw err;}
		    else{
		    console.table(res);
		    }
		    displayOptions();
		  });
}
function addInventory(){
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
          message: "What item would you like add Inventory to?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How much would you like to add?"
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

// bid was high enough, so update db, let the user know, and start over
          var newQuantity = (chosenItem.stock_quantity + parseInt(answer.quantity));
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
              console.log("Inventory Added Successfully!");
              displayOptions();
            }
          );
        
      });
  });
}
function addProduct(){

	    inquirer
      .prompt([
        {
          name: "product",
          type: "input",
          message: "What is the name of the product you would like to add?"
        },
        {
          name: "department",
          type: "input",
          message: "What department would you like the product to be placed in?"
        },
        {
          name: "price",
          type: "input",
          message: "What is the product's price?"
        },
        {
          name: "stock_quantity",
          type: "input",
          message: "How much of the product would you like to add?"
        },
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var prodName = answer.product;
        var prodDepart = answer.department;
        var prodPrice = parseFloat(answer.price);
        var prodStock = answer.stock_quantity;
        
		  var sql = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ?";
		  var values = [
		    [prodName, prodDepart, prodPrice, prodStock]
		  ];
		  connection.query(sql, [values], function (err, result) {
		    if (err) throw err;
		    console.log("Number of records inserted: " + result.affectedRows);
		  });

      	displayOptions();

});
}