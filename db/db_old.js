export let movies = [
    {
        id: 0,
        name: "Avengers",
        score: 1
    },
    {
        id: 1,
        name: "Iron Man",
        score: 10
    },
    {
        id: 2,
        name: "Spider Man",
        score: 7
    },
    {
        id: 3,
        name: "Logan",
        score: 8
    }
];

export const getByID = (id) => {
    const filtered = movies.filter((movie) => movie.id === id);
    return filtered[0];
};

export const deleteMovie = (id) => {
    const deleted = movies.filter((movie) => movie.id !== id);
    if (movies.length > deleted.length) {
        movies = deleted;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length,
        name: name,
        score: score
    }
    movies.push(newMovie);
    return newMovie;
}