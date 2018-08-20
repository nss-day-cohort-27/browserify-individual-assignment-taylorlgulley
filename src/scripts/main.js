// Individual assessment - The Places You've Been! This mini application will list each of your favorite places you've ever been and allow you to add a new one. This can include cities, countries, and/or restaurants/coffee shops/malls - anything you want! While the content is up to you, there are specific requirements for this project:

// 1. Browserify project structure
// 2. Building forms, collecting user input, and both posting and deleting
// 3. Backed by json-server
// 4. A component to list the resource
// 5. A component to build the HTML representation of a resource
// 6. All coordinated by main.js

// Timeframe - you will have this today while you're not in retros, and tomorrow afternoon after demos to finish up this project. This is an *individual assessment* for you to to assess your knowledge, and for us to assess your level of understanding. You can use your group projects or code alongs as resources, but _you must understand what the code is doing. Do NOT blindly copy and paste_. *Please do not use each other.* If you have any questions, please feel free to ask an instructor!

const formManager = require("./placeForm");
const DataManager = require("./DataManager");

// Render the form
document.querySelector("#placeForm").innerHTML = formManager.renderPlaceForm();

//Render the List

//Button Functionality
document.querySelector(".savePlace").addEventListener("click", () => {
    const newPlace = {
        name: document.querySelector("#placeName").value,
        date: document.querySelector("#placeDate").value,
        location: document.querySelector("#placeLocation").value
    }
    DataManager.savePlaceEntry(newPlace).then(() => {
        formManager.clearForm();
        console.log("You posted it")
    })
})

console.log("hello world");
