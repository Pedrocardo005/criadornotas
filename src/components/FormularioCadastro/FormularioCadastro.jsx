import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
    constructor (props) {
        super(props);
        this.titulo = '';
        this.texto = '';
    }

    _handleMudancaTitulo = function (event) {
        // Evita que o evento se propague.
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleMudancaTexto = function (event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _criarNota = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <input 
                    type="text" 
                    placeholder="tipo" 
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)} />
                <textarea 
                    rows={15} 
                    placeholder="Escreva uma nota" 
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}></textarea>
                <button className="form-cadastro_input form-cadastro_submit">Criar uma nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;