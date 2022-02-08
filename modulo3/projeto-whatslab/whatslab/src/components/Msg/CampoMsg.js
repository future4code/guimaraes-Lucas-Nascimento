import React from 'react'
import styled from 'styled-components'




const MsgContainer = styled.div`
  border: 0;
  border-radius: 20px;
  width: auto;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 2px 2px 12px darkgray;
  flex-wrap: wrap;
  padding: 10px;
`
const User = styled.p`
  font-weight: bold;
  color: #4d4a4b;
`
const MsgUser = styled.p`
  word-wrap: break-word;
`


class Msg extends React.Component {

  render() {
    return <MsgContainer>
      
      <User>{this.props.nomeUsuario} </User>
      <MsgUser>{this.props.msgUsuario}</MsgUser>
    </MsgContainer>
  }
}

export default Msg