const placeEntry = (item) => {
    return `
        <div class="placeEntry">
            <p class="place__name">
                Place Name: ${item.name}
            </p>
            <p class="place__description">
                Description: ${item.description}
            </p>
            <p class="place__location">
                Place Location: ${item.location}
            </p>
            <button class="place__delete" id="delete--${item.id}">Delete</button>
        </div>
    `
}

module.exports = placeEntry