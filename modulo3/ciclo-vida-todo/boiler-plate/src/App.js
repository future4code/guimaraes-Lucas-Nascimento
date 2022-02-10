import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`


class App extends React.Component {
  state = {
    tarefas: [

    ],
    inputValue: '',
    filtro: ''
  }
  
  componentDidMount() {
    const persisitirTarefas = localStorage.getItem("tarefas")

    if (persisitirTarefas) {
      this.setState({ tarefas: JSON.parse(persisitirTarefas)})
    }
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
    }
    
  };

  onChangeInput = (event) => {
    this.setState({ textoNovaTarefa: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.textoNovaTarefa,
      completa: false
    }

    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]

    this.setState({ tarefas: novaListaDeTarefas })
  }

  selectTarefa = (tarefaId) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefaId === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({ tarefas: novaListaDeTarefas })
  }

  apagarTarefa = (tarefaId) => {
    const novaListaDeTarefas = this.state.tarefas.filter((tarefa) => {
      return tarefaId !== tarefa.id
    }) 
    
    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }


  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.textoNovaTarefa} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.apagarTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              
            )
          })}
          
        </TarefaList>
        <p>Um click altera para tarefa realizada e duplo click apaga tarefa. </p>

      </div>
    )
  }
}

export default App
