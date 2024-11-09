import MainComponent from '../../components/MainComponent/MainComponent';
import MovieCard from '../../components/Others/MovieCard';
import Request from '../../Request/Request';

const Home = () => {
   return (
      <div>
         <MainComponent />
         <MovieCard title='Curently Playing' fetchUrl={Request.requestNowPlaying} />
         <MovieCard title='Popular Movies' fetchUrl={Request.requestPopular} />
         <MovieCard title='Top Rated Movies' fetchUrl={Request.requestTopRated} />
         <MovieCard title='Upcoming Movies' fetchUrl={Request.requestUpcoming} />
         <MovieCard title='Trending TV Shows' tvShowUrl={Request.requestTrendingTvShow} />
      </div>
   );
};

export default Home;
