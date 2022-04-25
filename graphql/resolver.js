import { getMovies } from "../db/db";

const resolver = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating)
    }
};

export default resolver;