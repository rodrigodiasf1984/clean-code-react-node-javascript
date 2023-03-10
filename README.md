# clean-code-react-node-javascript

### Challenge 1: Variable naming

<p>
The code in which you will practice these concepts consists of a function that gets a username from Github and returns the same user with a category.
</p>
<p>
The categories will be assigned to the user according to the number of their followers on Github, where if the number of followers is greater than or equal to the minimum number that each category requires, the category that has the most followers will be returned.
</p>
The categories will be as follows:

1. User: I need at least 5 followers to receive this category
2. Friendly: I need at least 50 followers to receive this category
3. Famous: I need at least 500 followers to receive this category
4. Super Star: I need at least 1000 followers to receive this category
<p>
Your goal in this code is not to correct or implement its operation, because it already works, but you should rename variables or even object attributes according to what you have learned, giving meaning to the variables according to the rules above.
</p>

### Challenge 2: Boolean Variable naming

The code in which you will practice these concepts contains logic that represents Diego going to an amusement park, Rocket Park, to ride his favourite toy.

To enter the park there are some rules:

- You need to have a ticket
- The park is open between 9 a.m. and 6 p.m.

To ride your favourite toy, Diego just needs to be over 130cm tall.

Your goal in this code is not to fix or implement how it works because it already works, but you should rename variables or even attributes of objects according to what you have learned, giving meaning to the variables according to the rules above.

###  Challenge 3: Cause vs. Effect

The code in which you will practice these concepts contains logic from a React component that makes a call to a function that returns user data.

While the user data is not returned, the `Loading` behaviour is displayed on the screen so that the screen is not blank.

Your goal in this code is not to fix or implement how it works because it already works, but you should rename variables or even object attributes according to what you have learned, giving meaning to the variables according to the rules above.

###  Challenge 4 : Code in English

In this challenge, you'll put into practice everything you've just learned in the `English Code` class from the Clean Code course.

The code in which you will practice these concepts contains logic from a React component that filters a list of products to display on the screen only the products that the user searches for when typing in the input.

Your goal in this code is not to fix or implement how it works because it already works, but you should rename variables or even object attributes according to what you have learned, giving meaning to the variables according to the rules above.

### Challenge 5: Conditional rules

In this challenge, you'll put into practice everything you've just learned in the `Rules in Conditionals` class in the Clean Code course.

The code in which you will practice these concepts contains a function that checks if a student will pass or fail at the end of the school year.

To pass, there are two rules:

- Your grade must be greater than 7
- Your absences must be less than 100

Your goal in this code is not to fix or implement how it works because it already works, but to reorganize the code in order to apply what you have learned about conditional rules.

### Challenge 6: `Parameters and destructuring

In this challenge, you will put into practice everything you have just learned in the `Parameters and destructuring` class in the Clean Code course.

The code in which you will practice these concepts contains functions that handle updating a user's data from a route that will receive the following data:

`body: { name, email, password }`

`params: { id }`

Your goal in this code is to apply the concepts you have learned in class by making the code clearer about what the `body`, `params` and `data` parameters receive, no implementation of functionality is required to complete the challenge.

The code in which you will practice these concepts contains functions that deal with checking updates to an application and calculating a discount, where:

### Challenge 7: Magic numbers

1. The checking time for an update via `setInterval` is done every 30 minutes.
2. The discount calculations must have the price in cents and the discount in percent.

Your goal in this code is to apply the concepts learned in class by making it clearer to the code what these magic numbers refer to, no implementation of functionality is required to complete the challenge.


### Challenge 8: Comments vs Documentation

In this challenge you will put into practice everything you have just seen in the `Comments vs Documentation` class in the **Clean Code.** course

The code in which you will practice these concepts contains a function responsible for registering the user in the database. However, before you can register the user in the database you need to perform some steps:

- Validations
- Conversion of the avatar to JPG.

Your goal in this code is to apply the concepts learned in class, removing as many comments as possible. Remember that it is valid to rewrite a piece of code to make it clearer, thus eliminating the need for comments.


### Challenge 9: Syntatic Sugars

In this challenge you will put into practice everything you have just seen in the `Syntatic Sugars` class in the **Clean Code.** course

The code in which you'll practice these concepts has one objective: take the first 5 values from an app's rating array, sum them, and return the result and current time. To do this we have two functions:

- `sumFirstFiveRatings`: this function should return an object with the sum of the first 5 ratings and the current time in timestamp (in case you are not sure about this format, it is the number of seconds that have passed since January 1, 1970). However, if ratings are `falsy' or do not have at least 5 values, it should return the respective errors.
- `getFirstFiveRatings`: this function should return the first 5 values of the rating array if it is at least 5. If this condition is not met, it should return `false`.

Your goal in this code is to apply the concepts you have learned in class, removing as much `syntactic sugar` as possible from your code. Remember that shorter code is not always better.




