const placeEntry = require("./placeEntry")

const listElement = document.querySelector("#placeList")
const titleElement = () => {
    return `
        <div class="listHeader">
            <h3>
                Restaurant List
            </h3>
        </div>
    `
}

const placeList = (places) => {
    listElement.innerHTML = ""

    listElement.innerHTML = titleElement()
    places.map(place => {
        listElement.innerHTML += placeEntry(place)
    })
}

module.exports = placeList