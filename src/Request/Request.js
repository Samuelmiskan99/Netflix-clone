const api_key = import.meta.env.VITE_API_KEY_TMDB;

const Request = {
   requestNowPlaying: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
   requestPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc`,
   requestTopRated: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`,
   requestUpcoming: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
   requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=action&include_adult=false&language=en-US&primary_release_year=2023&page=1&region=america&year=2023`,
   requestTrendingTvShow: `https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}`,
};

export default Request;
