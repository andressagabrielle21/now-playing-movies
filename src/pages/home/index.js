import { Container, MovieList, Movie } from "../../styles/HomeStyles";
import {useState, useEffect} from 'react';
import {APIKey} from '../../config/key'
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";


function Home() {

    //The API Variable will be stored as a variable of STATE
    // STATE is a data that constantly changes 
    // In React there's a HOOK that's called USESTATE, that's used to control the state of an variable inside a application
    //HOOK is coming from the functional  

    const imgPath = 'https://image.tmdb.org/t/p/w500';
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data =>  {
            console.log(data.results)
            setMovies(data.results)
        })

    }, [])

    return (
        // Tags should NEVER be outside a parent element, for example DIVs
        <Container>

            <Hero />
            
            <MovieList>
                {// Everytime we open a curly braces it's because we are going to develop some JS code
                    //.map() is a function that runs each object inside of an array
                    movies.map(movie => {
                        // In each one of these arrays, we're going to return a component/Movie
                        return (
                            <Movie key={movie.id}>
                                <Link to={`/details/${movie.id}`}><img src={`${imgPath}${movie.poster_path}`} alt="Poster"/></Link>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                    //.map() returns something, and ForEach() doesnt return anything.
                }
            </MovieList>
        </Container>
    )
}

// Without exporting, we'll never get to import to another file
export default Home;