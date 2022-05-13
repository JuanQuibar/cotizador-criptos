import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    display: block;
    margin: 15px 0;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 5%;
`



const useSelectMoneda = (label, opciones) => {

    const [state, setState] = useState("")

    const SelectMoneda = () => (
        <>
            <Label> {label} </Label>
            <Select 
                value={state} 
                onChange= { e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>
                {opciones.map(moneda =>(
                    <option 
                        key={moneda.id}
                        value={moneda.id}
                    
                    >{moneda.nombre} </option>
                    

                ))}
            </Select>
        
        </>
    )
    return [ state, SelectMoneda ]
  
}

export default useSelectMoneda