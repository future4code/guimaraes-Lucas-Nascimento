import React from "react";
import styled from 'styled-components'


const Input = styled.input`
    border: 0;
    padding: 10px;
    border-radius: 10px;
    outline: none;
`

class Etapa1 extends React.Component {

    render() {

        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <h3>1. Qual o seu nome?</h3>
                <Input placeholder="Digite seu nome..." />

                <h3>2. Qual a sua idade?</h3>
                <Input placeholder="Digite sua idade.." />

                <h3>3. Qual o seu email?</h3>
                <Input placeholder="Digite seu email..." />

                <h3>4. Qual a sua escolaridade?</h3>
                <select>
                    <option value={'medioIncompleto'}>Ensino médio incompleto</option>
                    <option value={'medioCompleto'}>Ensino médio completo</option>
                    <option value={'superiorIncompleto'}>Ensino superior incompleto</option>
                    <option value={'superiorCompleto'}>Ensino superior completo</option>
                </select>



            </div>
        )
    }
}

export default Etapa1