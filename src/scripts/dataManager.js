const DataManager = Object.create(null, {
    savePlaceEntry: {
        value: (place) => {
            return fetch("http://localhost:8088/places", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            body: JSON.stringify(place)
            })
            .then(response => response.json())
        }
    },
    getPlaceEntryList: {
        value: () => {
            return fetch("http://localhost:8088/places")
                .then(response => response.json());
        }
    },
    deletePlaceEntry: {
        value: (id) => {
            return fetch(`http://localhost:8088/places/${id}`, {
                method: "DELETE"
            })
            .then(r =>r.json())
        }
    }
})

module.exports = DataManager