import React, { Component }  from 'react'
import  fruta from './abacate.png'

class dadosPessoais extends Component {
  state = {
    name:`Igor Bastos`,
    idade :17,
    comida :`Churrasco`,
    musica: [`Racionais mc's - Vida Loka`,`Djonga - Bença`,`Legião Urbana - Tempo Perdido`]
  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
        <h3>Comidas Favoritas</h3>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ul>
        <img src={fruta}/>
      </div>
    );
  }
}

export default dadosPessoais;