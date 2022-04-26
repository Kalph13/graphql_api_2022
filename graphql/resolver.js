import { getMovies, getMovie, getSuggestions } from "../db/db";

const resolver = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    }
};

export default resolver;