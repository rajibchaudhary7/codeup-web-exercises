(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstname: "Rajib",
        lastname: "Chaudhary"
    };
    console.log(person.firstname);
    console.log(person.lastname);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return "How are you doing " + person.firstname + " " + person.lastname + "?";
    };
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(shopper){
        if (shopper.amount > 200) {
            let discount = 0.12 * shopper.amount;
            let afterDiscount = shopper.amount - discount;
            console.log(shopper.name + " bought products for " + shopper.amount + "."
                + " His discount is: " + discount + " and will pay " + afterDiscount + " after the discount.")
        } else {
            let discount = 0;
            let afterDiscount = shopper.amount;
            console.log(shopper.name + " bought products for " + shopper.amount + "."
                + " His discount is: " + discount + " and will pay " + afterDiscount + " after the discount.")
        }

    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {title: "Anna Karenina",
            author:{
            firstname: "Leo",
                lastname: "Tolstoy"
            }},
        {title: "Madame Bovary", author:{
            firstname: "Gustav",
                lastname: "Flaubert"
            }},
        {title: "Lolita", author:{
            firstname: "Vladimir",
                lastname: "Nabokov"
            }},
        {title: "Hamlet", author:{
            firstname: "William",
                lastname: "Shakespeare"
            }},
        {title: "In Search of Lost Time", author:{
            firstname: "Marcel",
                lastname: "Proust"
            }}
    ];
    books.forEach(function(book) {
            console.log(book.title + " is the title of this book");
            console.log("Author's firstname: " + book.author.firstname);
            console.log("Author's lastname: " + book.author.lastname );
    });


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for (let i = 1; i <= 5; i++) {
        console.log("Book # " + i);
        console.log("Title: " + books[i-1].title);
        console.log("Author: " + books[i-1].author.firstname + " " + books[i-1].author.lastname)
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     */

    let booksArray = [];
    function createBook (tit, fname, lname) {
        let newBook = {
            title: tit,
            author: {
                firstname: fname,
                lastname: lname
            }
        }
        booksArray.push(newBook);
    }
    console.log(booksArray);
    createBook ("Anna Karenina", "Leo", "Tolstoy");
    createBook("Madame Bovary", "Gustav", "Flaubert");
    createBook("Lolita", "Vladimir", "Nabokov");
    createBook("Hamlet", "William", "Shakespeare");
    createBook("In Search of Lost Time", "Marcel", "Proust");
    /**
    * - Create a function named `showBookInfo` that accepts a book object and
    *   outputs the information described above. Refactor your loop to use your
    *   `showBookInfo` function.
    */
    function showBookInfo() {
        booksArray.forEach(function (b, index) {
            console.log("Book # " + (index + 1));
            console.log("Title: " + b.title);
            console.log("Author: " + b.author.firstname + " " + b.author.lastname)
        })
    }
    showBookInfo(booksArray);
})();