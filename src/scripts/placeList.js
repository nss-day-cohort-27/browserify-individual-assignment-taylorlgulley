const placeEntry = require("./placeEntry")

const listElement = document.querySelector("#placeList")

const placeList = (places) => {
    listElement.innerHTML = ""

    places.map(place => {
        listElement.innerHTML += placeEntry(place)
    })
}

module.exports = placeList