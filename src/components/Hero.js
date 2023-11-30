import { Container } from "../styles/HeroStyles"
import Film from "../assets/film.png"

const Hero = () => {
  return (
    <Container>
      <img className="bg-img" src="https://www.themoviedb.org/t/p/original/vljrgvuOILOqycL3YRzcjQRxPOm.jpg" alt="sunset boulevard" />

      <div className="overlay">
        <h1>Movies Now <br /> Playing</h1>
        <img src={Film} alt="Film Icon"/>
      </div>
    </Container>
  )
}

export default Hero