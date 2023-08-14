
const key = '795a3506c189ef36069dfe62c5e6dcea'

//41:45
const requests = {
    requestPopular: `https://api.themoviedb.org/3/movies/popular?api_key=795a3506c189ef36069dfe62c5e6dcea&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movies/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movies/popular?api_key=${key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/movies/movie?api_key=${key}&language=en-US&query=horror&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movies/upcoming?api_key=${key}&language=en-US&page=1`,  
};

export default requests

//https://api.themoviedb.org/3/movie/popular?api_key=795a3506c189ef36069dfe62c5e6dcea&language=en-US&page=1

