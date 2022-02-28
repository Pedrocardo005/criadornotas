import React, { Component } from "react";
import "./assets/App.css";
import FormularioCadastro from './components/FormularioCadastro';
import ListaNotas from './components/ListaNotas';

class App extends Component {
  constructor(){
    super();
    // states renderizam a tela
    this.state = {notas:[]}
  }

  // Executa quando o react é renderizado pela primeira vez.
  componentDidMount () {
    document.title='ceep';
  }

  criarNota (titulo, texto) {
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {notas: novoArrayNotas}
    this.setState(novoEstado)
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro>
        <ListaNotas notas={this.state.notas}></ListaNotas>
      </section>
      );
  }
}

export default App;
