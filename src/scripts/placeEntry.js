const placeEntry = (item) => {
    return `
        <div class="placeEntry">
            <p class="place__name">
                Place Name: ${item.name}
            </p>
            <p class="place__date">
                Place Date: ${item.date}
            </p>
            <p class="place__location">
                Place Location: ${item.location}
            </p>
            <button class="place__edit" id="edit--${item.id}">Edit</button>
        </div>
    `
}

module.exports = placeEntry