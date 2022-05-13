import {useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMoneda from '../hooks/useSelectMoneda'
import { monedas } from '../data/monedas' 

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    color: #fff;
    padding: 10px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
    
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [ moneda, SelectMoneda ] = useSelectMoneda("Elegir moneda", monedas)
    const [ cripto, SelectCripto ] = useSelectMoneda("Elegir criptomoneda", criptos)
    

    useEffect( () => {
        const consultarApi = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
           
            const arrayCriptos = resultado.Data.map(cripto =>{
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
                
            })
            setCriptos(arrayCriptos)

        }
        consultarApi()
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if([moneda, cripto].includes("")){
            setError(true)
            return
        }
        setError(false)

        setMonedas({
            moneda,
            cripto
        })
    }

    
    return (
        <>

            {error && <Error>Todos los campor son obligatorios</Error> }
            <form
                onSubmit={handleSubmit}
            >
                <SelectMoneda />
                <SelectCripto />
                
                <InputSubmit 
                    type="submit" 
                    value="Cotizar" 
                />
            </form>
        </>
    )
}

export default Formulario