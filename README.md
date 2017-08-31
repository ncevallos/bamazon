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


For the Bamazon Manager mode, upon start-up, the Bamazon App