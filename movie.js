class Movie {
    constructor(name, duration, actors, year) {
        this._name = name;
        this._duration = duration;
        this._actors = actors;
        this._year = year;
    }

    get getName() {
        return this._name;
    }

    get getDuration() {
        return this._duration;
    }

    get getActors() {
        return this._actors;
    }

    get getYear() {
        return this._year;
    }
}

const actors = ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Jon Hamm', 'Glen Powell', 'Ed Harris', 'Val Kilmer',
    'Lewis Pullman']
const movie = new Movie('Top Gun: Maverick', 130, actors, 2022)
console.log('Nome: ' + movie.getName)
console.log('Duração: ' + movie.getDuration + 'min')
console.log('Atores: ' + movie.getActors)
console.log('Ano: ' + movie.getYear)