const Movie = (name, duration, actors, year) => ({
    name,
    duration,
    actors,
    year,
    getName: () => (name),
    getDuration: () => (duration),
    getActors: () => (actors),
    getYear: () => (year)
})

const actors = ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Jon Hamm', 'Glen Powell', 'Ed Harris', 'Val Kilmer',
    'Lewis Pullman']
const movie = Movie('Top Gun: Maverick', 130, actors, 2022)
console.log('Nome: ' + movie.getName())
console.log('Duração: ' + movie.getDuration() + 'min')
console.log('Atores: ' + movie.getActors())
console.log('Ano: ' + movie.getYear())