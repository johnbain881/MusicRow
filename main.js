function createFunkArtist(name, age) {
    return {
        name: name,
        age: age,
        genre: "Funk"
    }
}
function createBluegrassArtist(name, age) {
    return {
        name: name,
        age: age,
        genre: "Bluegrass"
    }
}
function createCountryArtist(name, age) {
    return {
        name: name,
        age: age,
        genre: "Country"
    }
}
function createPopArtist(name, age) {
    return {
        name: name,
        age: age,
        genre: "Pop"
    }
}
function createRapArtist(name, age) {
    return {
        name: name,
        age: age,
        genre: "Rap"
    }
}
let JumpStopRecords = [createFunkArtist("Dre Funkz", 25), createRapArtist("Dusta Grimes", 21), createRapArtist("Loyoncé Branis", 27)]
let ChattenRecords = [createCountryArtist("Bruce Atikins", 23), createBluegrassArtist("Bartholomew Danielson", 23), createCountryArtist("Avilee Dallas", 19)]
let PolarRecords = [createPopArtist("Jensen Brown", 20), createPopArtist("Austin Kinkaid", 22)]
console.log("JumpStop: ", JumpStopRecords, "Chatten: ", ChattenRecords, "Polar: ", PolarRecords)