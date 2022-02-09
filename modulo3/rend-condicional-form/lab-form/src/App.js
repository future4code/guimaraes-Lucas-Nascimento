import React from "react";
import styled from "styled-components";

import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: lightgray ;
  height: 100vh;
`

const BtnForm = styled.button`
  border: 0;
  padding: 8px;
  border-radius: 10px;
  font-weight: bold;
  background-color: black ;
  color: #fff;
`

class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {

      case 1:
        return <Etapa1 />


      case 2:
        return <Etapa2 />


      case 3:
        return <Etapa3 />


      case 4:
        return <Final />

    }

  }

  mudarEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  

  render() {
    
    let exibirBotao = this.state.etapa > 3 || 
      <BtnForm onClick={this.mudarEtapa}>Proxima Etapa</BtnForm>  
      //Se o estado de etapa for menor que 3 mostrara o botao
    

    return (
      <Container>

        {this.renderizaEtapa()}
        <br/>
        {exibirBotao}
                
      </Container>
    )
  }
}

export default App