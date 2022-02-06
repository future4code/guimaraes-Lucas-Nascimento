import React from 'react';
import styled from 'styled-components'
import Msg from './components/Msg/CampoMsg';


const BodyWhats = styled.div`
  background-color: #E0E0E0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  width: 600px;
  height: 95vh;
  box-shadow: 2px 2px 12px darkgray;
  background-color: lightgray;
  border: 1px solid #555;
  border-radius: 20px;
  padding: 20px;
`
const PostMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`
const InputForm = styled.input`
  border: 0;
  border-radius: 20px;
  padding: 8px;
  outline: 0;
  box-shadow: 2px 2px 12px darkgray;
  margin-right: 10px;
`
const BtnForm = styled.button`
  background-color: lightgreen;
  border: 0;
  padding: 8px;
  border-radius: 20px;
  font-weight: bold;
  box-shadow: 2px 2px 12px darkgray;
`


class App extends React.Component {

  state = {
    msg: [

    ],

    valorInputNome: '',
    valorInputMsg: '',

  }

  adicionaMsg = () => {
    const novaMsg = {
      nome: this.state.valorInputNome,

      msgUsuario: this.state.valorInputMsg,


    }

    const novaMsgUsuario = [...this.state.msg, novaMsg]

    this.setState({ msg: novaMsgUsuario })

    this.setState({ valorInputMsg: '' }) // Função para limpar o campo do input assim que clicar no botao de enviar

  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }

  onChangeInputMsg = (event) => {
    this.setState({ valorInputMsg: event.target.value })
  }


  render() {
    const listaDeMsg = this.state.msg.map((msg) => {
      return (
        
        <Msg nomeUsuario={msg.nome} msgUsuario={msg.msgUsuario} /> 

      )
    })


    return (
      <BodyWhats>


        <MainContainer>{listaDeMsg}</MainContainer>

        <PostMsg>
          <InputForm
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={'Usuario'}
          />
          <InputForm
            value={this.state.valorInputMsg}
            onChange={this.onChangeInputMsg}
            placeholder={'Digite uma mensagem...'}
          />

          <BtnForm onClick={this.adicionaMsg}>Enviar</BtnForm>

        </PostMsg>



      </BodyWhats>
    );
  }
}

export default App;
