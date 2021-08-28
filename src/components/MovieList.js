import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	const openTab = (imdbID) =>
	{
		window.open("https://www.imdb.com/title/" + imdbID);
	}
	return (
		<>
		
			{
				(props.movies != null) ?
			props.movies.map((movie, index) => (
				<div classname="movie-card">
						<Card className="movie">
						<Card.Img className="card-img" onClick={() => openTab(movie.imdbID)} variant="top" src={movie.Poster} alt='movie' />
						<Card.Body>
							<Card.Title>{movie.Title}</Card.Title>
							<Card.Text>
							<p style={{marginBottom: "0px"}}>Year: {movie.Year}</p>
							imdbID: {movie.imdbID}
							</Card.Text>
						</Card.Body>
						<div 
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'>
						<FavouriteComponent />
						</div>
						</Card>
				</div>
			))
			:
			<p>no movie list</p>
			}

		
		</>
	);
};

export default MovieList;