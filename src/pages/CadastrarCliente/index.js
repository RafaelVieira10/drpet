import React from "react";
import './style.css';

function CadastrarCliente() {
    return(
        <div className="container-cadastro-cliente">
            <h2>Cadastrar cliente</h2>
            <div>
                <input type="text" className="input" name="" placeholder="Nome"></input>
                <input type="email" className="input" name="" placeholder="E-mail"></input>
                <input type="text" className="input" name="" placeholder="Cpf"></input>
                <input type="password" className="input" name="" placeholder="Senha"></input>
                

                <button type="submit" className="button-edit">Editar</button>
                
            </div>
        </div>
    );
}

export default CadastrarCliente;