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
    @media (max-width: 500px){
    font-size: 16px;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
    margin-top: 3px;

    @media (max-width: 500px){
    font-size: 20px;
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
    align-self:center;
`

const Resultado = ({resultado}) => {
    const bajar = () => {
        window.scroll({
            top: 1000,
            left: 0,
            behavior: 'smooth'
          });
    }


    const formatCifra = (cantidad) =>{
        const eliminarLetras = cantidad.replace(/[A-Z/€$,]/g, '')
        const numero = Number(eliminarLetras)
       
        const cantidadFinal = numero.toLocaleString('es-AR',{
            minimumFractionDigits: 2
        })
            console.log(cantidadFinal)
        return cantidadFinal
    }
    
    

    /* const formatCifra = (cantidad) => {
        return cantidad.toLocaleString('de-DE',{
            minimumFractionDigits: 2, 
            style: "currency"
        })
    } */

   

    const {PRICE, 
        LASTUPDATE, 
        CHANGEPCT24HOUR, 
        LOWDAY, HIGHDAY, 
        IMAGEURL, 
        TOSYMBOL
    } = resultado

    return (
    <>
        <Contenedor>
            <Imagen 
            src={`https://cryptocompare.com${IMAGEURL}`} 
            alt="imagen cripto" 
            />
            <div>

                <Precio>
                    El precio es de: 
                    <span>{` ${TOSYMBOL} ${formatCifra(PRICE)}`} </span>
                </Precio>

                <Texto>
                    Precio más alto del día: 
                    <span>{` ${TOSYMBOL} ${formatCifra(HIGHDAY)}`} </span>
                </Texto>

                <Texto>
                    Precio más bajo del día: 
                    <span>{` ${TOSYMBOL} ${formatCifra(LOWDAY)}`} </span>
                </Texto>

                <Texto>
                    Variación últimas 24 hs: 
                    <span>{` ${formatCifra(CHANGEPCT24HOUR)}%`} </span>
                </Texto>

                <Texto>
                    Última actualización: 
                    <span>{` ${LASTUPDATE}`} </span>
                </Texto>

            </div>
        </Contenedor>
        {setTimeout(() => {
            bajar()
        }, 800) }
    </>
        
    )
}

export default Resultado