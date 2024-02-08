import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
    
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

export const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = resultado
    return (
        <Contenedor>
            <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto' />
            <div>
                <Precio>El precio mas alto del dia es de: <span>{HIGHDAY}</span></Precio>
                <Texto>El precio mas bajo del dia es de: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion de las ultimas 24hrs es de: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>El precio es de: <span>{PRICE}</span></Texto>
                <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}
