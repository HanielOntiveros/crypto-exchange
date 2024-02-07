import styled from "@emotion/styled"
import imagenCrytpo from './img/imagen-criptos.png'
import { Formulario } from "./components/Formulario"

const Container = styled.div`

  max-width: 900px;
  margin:0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: auto(2, 1fr);
    column-gap: 2rem;
  }
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 34px;
  font-weight: 700;
  text-align:center;
  color: #FFF;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color:#66a2fe ;
    display: block;
    margin: 10px auto 0 auto ;
  }
  
`
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
  `



function App() {

  return (
    <>
      <Container>
        <Image
          src={imagenCrytpo}
          alt="Imagenes Cryptomonedas"
        />
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>
          <Formulario />
        </div>
      </Container>
    </>
  )
}

export default App
