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
            <form class="placeForm">
                <div class="form-group">
                    <label for="placeName">Place Name:</label>
                    <input type="text" class="form-control" id="placeName" placeholder="Restaurant Name">
                </div>
                <div class="form-group">
                    <label for="placeDescription">Description of Food:</label>
                    <textarea class="form-control" id="placeDescription" rows="3" placeholder="Great Food Description"></textarea>
                </div>
                <div class="form-group">
                    <label for="placeLocation">Location of Place:</label>
                    <input type="text" class="form-control" id="placeLocation" placeholder="Somewhere in Nashville">
                </div>
                <button class="savePlace">Save Place</button>
            </form>`
        }
    }
})


module.exports = formManager