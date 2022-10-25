class Movie {
    constructor(name, duration, actors, year) {
        this._name = name;
        this._duration = duration;
        this._actors = actors;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    get duration() {
        return this._duration;
    }

    get actors() {
        return this._actors;
    }

    get year() {
        return this._year;
    }
}

const actors = ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Jon Hamm', 'Glen Powell', 'Ed Harris', 'Val Kilmer',
    'Lewis Pullman']
const movie = new Movie('Top Gun: Maverick', 130, actors, 2022)
console.log('Nome: ' + movie.name)
console.log('Duração: ' + movie.duration + 'min')
console.log('Atores: ' + movie.actors)
console.log('Ano: ' + movie.year)