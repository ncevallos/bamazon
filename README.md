# bamazon

The Bamazon App was created in order to simulate MySQL database utility, in a semi real-world situation. 

The Bamazon App has two different modes available, Bamazon Customer, and Bamazon Manager.

**Bamazon Customer**
For the Bamazon Customer mode, upon start-up, the Bamazon App first presents the Customer with a view of all the items in the MySQL database. 
In addition to each of the items being displayed, related data of each item is also displayed, like item number, department, quantity, and price. After the table of items is presented, the user(in this case the customer), is then prompted what item they would like to buy. 
![Image of Customer View `](/images/ScreenShot1.png)
After Selecting an item, and hitting the enter key, the user is then prompted as to how many of that item they would like to purchase. 
![Image of Customer View `](/images/ScreenShot2.png)
![Image of Customer View `](/images/ScreenShot3.png)
Once the user enters a value and hits the enter key, they then receive a message. If there was not enough of that item in stock to fulfill the customer order, the customer is informed that there is insufficient quantity available for that operation, and that they should try again.
 ![Image of Customer View `](/images/ScreenShot4.png)
If there is a sufficient amount of the item in stock, the customer is informed that they product purchase was successful. They are also informed of the total purchase price of their item and quantity selection.
![Image of Customer View `](/images/ScreenShot5.png)
Once the transaction is complete, the Customer will then be redirected and greeted with the screen prompting them once again about what item they would like to purchase.
![Image of Customer View `](/images/ScreenShot6.png)


For the Bamazon Manager mode, upon start-up, the Bamazon App greets the user with a list of options, and prompts them of which would they like to perform. After every option the Manager performs, they will then be returned to this option screen.

![Image of Customer View `](/images/MScreenShot1.png)

If the user selects option one, the program will print a list of all available items. In addition to the items, related data of each item is also displayed, like item number, department, quantity, and price.
![Image of Customer View `](/images/MScreenShot2.png)

If the user selects option two, the program will display all items having an stock quantity of less than 5. 

![Image of Customer View `](/images/MScreenShot3.png)

If the user selects option three, the Manager can added inventory stock to an item already on the list. They will first be prompted which item they would like to add inventory to. Then they will be prompted as to how much of the item they would like to add to inventory.

![Image of Customer View `](/images/MScreenShot4.png)

![Image of Customer View `](/images/MScreenShot5.png)

If the user selects option four, the Manager can add a new item to the database. They will be prompted to enter all the necessary fields starting with the name of the product. 


![Image of Customer View `](/images/MScreenShot6.png)

![Image of Customer View `](/images/MScreenShot7.png)

After the Manager is done with the program, they simply choose option 5 to exit.

![Image of Customer View `](/images/MScreenShot8.png)