import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Container } from "../../styles/DetailsStyles";
import { Link } from "react-router-dom";


function Details() {

    const imgPath = 'https://image.tmdb.org/t/p/w500';

    const {id} = useParams()

    const [movie, setMovie] = useState({})

    useEffect(() =>  {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data =>  {
            const {title, poster_path, overview, release_date} = data
            const movie = {
                id,
                title,
                resume: overview,
                image: `${imgPath}${poster_path}`, 
                releaseData: release_date
            }
            setMovie(movie)
        })
    },[id])

    console.log()

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.title}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Info: {movie.resume}</span>
                    <span className="date">Release date: {movie.releaseData}</span>

                    <Link to="/"><button>Go back</button></Link>
                </div>
            </div>
        </Container>
    )
}

export default Details