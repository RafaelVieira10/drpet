import React from "react";
import './style.css';

function CadastrarPet() {
    return(
        <div className="container-cadastro-pet">
            <div className="content-cadastro">
            <h2>Cadastre seu Pet</h2>
                <input className="input-cadastro"  name="" placeholder="Nome"></input>
                <input className="input-cadastro"  name="" placeholder="Raça"></input>
                <input className="input-cadastro"  name="" placeholder="Espécie"></input>
                <input className="input-cadastro"  name="" placeholder="Sexo"></input>
                <input className="input-cadastro"  name="" placeholder="Cor"></input>
                <input className="input-cadastro"  name="" placeholder="CPF (dono)"></input>

                <button type="submit" className="button-cadastro">CADASTRAR</button>  
            </div>

                <img src="/assets/cat-dog-amico.png" alt="" className="img-dog-cadastro" ></img>
                    
        </div>
    );
}

export default CadastrarPet;