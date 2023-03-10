

const database = {
    paint: [
        { id: 1, color: "Silver", price: 100 },
        { id: 2, color: "Midnight Blue", price: 200 },
        { id: 3, color: "Firebrick Red", price: 300 },
        { id: 4, color: "Spring Green", price: 400 }
    ],
    interior: [
        { id: 1, type: "Beige Fabric", price: 499 },
        { id: 2, type: "Charcoal Fabric", price: 599 },
        { id: 3, type: "White Leather", price: 699 },
        { id: 4, type: "Black Leather", price: 799 }
    ],
    technology: [
        { id: 1, package: "Basic Package", price: 200 },
        { id: 2, package: "Navigation Package", price: 400 },
        { id: 3, package: "Visibility Package", price: 600 },
        { id: 4, package: "Ultra Package", price: 800 }
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 600 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 800 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 1000 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 1200 }
    ]
}

export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}) )
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({wheels}))
}