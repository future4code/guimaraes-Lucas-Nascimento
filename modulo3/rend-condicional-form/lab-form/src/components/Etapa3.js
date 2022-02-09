import React from "react";
import styled from 'styled-components'

const Input = styled.input`
    border: 0;
    padding: 10px;
    border-radius: 10px;
    outline: none;
`

class Etapa3 extends React.Component{
    render() {
        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                <h3>5. Por que você não terminou um curso de graduação?</h3>
                <Input placeholder="Digite sua resposta..."/>

                <h3>6. Você fez algum curso complementar?</h3>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>

            </div>
        )
    }
}

export default Etapa3