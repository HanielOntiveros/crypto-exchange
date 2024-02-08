import styled from "@emotion/styled"
import imagenCrytpo from './img/imagen-criptos.png'
import { Formulario, Resultado, Spinner } from "./components"
import { useEffect, useState } from "react"

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
  const [monedas, setMonedas] = useState({})
  const [criptoCompare, setCriptoCompare] = useState({})
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      setLoading(true)
      setCriptoCompare({})
      const { moneda, criptoMoneda } = monedas
      const cotizarCrypto = async () => {
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
        const data = await fetch(URL)
        const resp = await data.json()
        setCriptoCompare(resp.DISPLAY[criptoMoneda][moneda])
        setLoading(false)
      }
      cotizarCrypto()
    }
  }, [monedas])

  return (
    <>
      <Container>
        <Image
          src={imagenCrytpo}
          alt="Imagenes Cryptomonedas"
        />
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>
          <Formulario setMonedas={setMonedas} />
          {loading && <Spinner />}
          {criptoCompare.PRICE && <Resultado resultado={criptoCompare} />}
        </div>
      </Container>
    </>
  )
}

export default App
