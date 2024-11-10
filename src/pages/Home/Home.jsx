import MainComponent from '../../components/MainComponent/MainComponent';
import MovieCard from '../../components/Others/MovieCard';
import Request from '../../Request/Request';

const Home = () => {
   return (
      <div>
         <MainComponent />
         <MovieCard scrollID='1' title='Curently Playing' fetchUrl={Request.requestNowPlaying} />
         <MovieCard scrollID='2' title='Popular Movies' fetchUrl={Request.requestPopular} />
         <MovieCard scrollID='3' title='Top Rated Movies' fetchUrl={Request.requestTopRated} />
         <MovieCard scrollID='4' title='Upcoming Movies' fetchUrl={Request.requestUpcoming} />
         <MovieCard
            scrollID='5'
            title='Trending TV Shows'
            tvShowUrl={Request.requestTrendingTvShow}
         />
      </div>
   );
};

export default Home;
