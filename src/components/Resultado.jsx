import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
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
    margin-top: 3px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
    align-self:center;
`

const Resultado = ({resultado}) => {
    const bajar = () => {
        window.scrollTo(0, document.body.scrollHeight)
    }
   

    const {PRICE, LASTUPDATE, CHANGEPCT24HOUR, LOWDAY, HIGHDAY, IMAGEURL} = resultado
  return (
    <>
        <Contenedor>
            <Imagen 
            src={`https://cryptocompare.com${IMAGEURL}`} 
            alt="imagen cripto" 
            />
            <div>
                <Precio>El precio es de: <span>{PRICE} </span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY} </span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY} </span></Texto>
                <Texto>Variación últimas 24 hs: <span>{`${CHANGEPCT24HOUR}%`} </span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE} </span></Texto>
            </div>
        </Contenedor>
        { bajar()}
    </>
  )
}

export default Resultado