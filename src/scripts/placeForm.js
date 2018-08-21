// Taylor created a event form to add events to the list
const formManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#placeName").value = ""
            document.querySelector("#placeDescription").value = ""
            document.querySelector("#placeLocation").value = ""
        }
    },
    renderPlaceForm: {
        value: () => {
            return `
                <fieldset>
                    <label for="placeName">Place Name:</label>
                    <input required type="text" id="placeName">
                </fieldset>

                <fieldset>
                    <label for="placeDescription">Description of Food:</label>
                    <textarea id="placeDescription" rows="10"></textarea>
                </fieldset>

                <fieldset>
                    <label for="placeLocation">Location of Place:</label>
                    <input id="placeLocation"></textarea>
                </fieldset>

                <button class="savePlace">Save Place</button>
            `
        }
    }
})


module.exports = formManager