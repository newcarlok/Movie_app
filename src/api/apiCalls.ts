const apiKey: string = "1bc5dfce7ad503bdf814d5f2aa1e2a59"
export const nowPlayingMoviesAPI: string = 
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const upcomingMoviesAPI: string = 
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
export const popularMovies: string =
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
export const searchMovies = (keyword: string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;
};
export const movieDetails = (movieId: number) => {
    return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`; 
};
export const movieCastDetails = (movieId: number) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
};
