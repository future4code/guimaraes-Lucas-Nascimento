import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const BodyInsta = styled.div`
  background-color: #E0E0E0;
`


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`
const PostForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
`
const InputForm = styled.input`
  border: 0;
  border-radius: 20px;
  padding: 8px;
  outline: 0;
  box-shadow: 2px 2px 12px darkgray;
  margin-right: 30px;
`
const BtnForm = styled.button `
  background-color: lightgreen;
  border: 0;
  padding: 8px;
  border-radius: 20px;
  font-weight: bold;
  box-shadow: 2px 2px 12px darkgray;
`


class App extends React.Component {

  state = {
    perfis: [
      {
        nome: "Paulinha",
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nome: "Lucas",
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nome: "Jessica",
        fotoUsuario: 'https://picsum.photos/50/53',
        fotoPost: 'https://picsum.photos/200/152'
      },

    ],

    valorInputNome: '',
    valorInputFoto: '',
    valorInputPost: ''
  }

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,

      fotoUsuario: this.state.valorInputFoto,

      fotoPost: this.state.valorInputPost
    }

    const novoPerfil = [...this.state.perfis, novoPost]

    this.setState({ perfis: novoPerfil })

    this.setState({valorInputNome: '', valorInputFoto: '', valorInputPost: '' }) // Função para limpar o campo do input assim que clicar no botao de enviar

  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value })
  }

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value })
  }


  render() {
    const listaDePerfis = this.state.perfis.map((perfis) => {
      return (
        <Post
          nomeUsuario={perfis.nome}
          fotoUsuario={perfis.fotoUsuario}
          fotoPost={perfis.fotoPost}
        />
      )
    })


    return (
      <BodyInsta>

        <PostForm>
          <InputForm
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={'Nome'}
          />
          <InputForm
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={'Link da foto'}
          />
          <InputForm
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={'Link do post'}
          />
          <BtnForm onClick={this.adicionaPost}>Adicionar Post</BtnForm>

        </PostForm>

        <MainContainer>{listaDePerfis}</MainContainer>




      </BodyInsta>
    );
  }
}

export default App;
