import React from "react";
import './style.css';

function AlterarUsuario() {
    return(
        <div className="container-editar-usuario">
            <h2>Editar conta</h2>
            <div>
                <input type="text" className="input" name="" placeholder="Nome"></input>
                <input type="email" className="input" name="" placeholder="E-mail"></input>
                <input type="password" className="input" name="" placeholder="Senha"></input>
                
                <button type="submit" className="button-edit">Editar</button>
            </div>
        </div>
    );
}

export default AlterarUsuario;