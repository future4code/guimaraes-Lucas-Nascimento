import React from "react";
import styled from 'styled-components'

const Input = styled.input`
    border: 0;
    padding: 10px;
    border-radius: 10px;
    outline: none;
`

class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <h3>5. Nome do curso?</h3>
                <Input placeholder="Digite o nome do curso..." />

                <h3>6. Qual a unidade de ensino?</h3>
                <Input placeholder="Digite o nome da instituição..."/>


            </div>
        )
    }
}

export default Etapa2