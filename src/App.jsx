import styled from "@emotion/styled"

const Container = styled.main`

`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align:center;
  color: #FFF;
`

function App() {

  return (
    <>
      <Container>

        <Heading>Heading styled component</Heading>
      </Container>
    </>
  )
}

export default App
