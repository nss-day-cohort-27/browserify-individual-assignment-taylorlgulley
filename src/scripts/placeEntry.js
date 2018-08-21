const placeEntry = (item) => {
    return `
        <div class="placeEntry" class="card col-md-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${item.location}</h6>
                <p class="card-text">${item.description}</p>
                <button class="place__delete" id="delete--${item.id}">Delete</button>
            </div>
        </div>
    `
}

module.exports = placeEntry