import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function EditarPet() {
    return(
        <div className="container-edit">
            <h2>Editar Pet</h2>
            <div>
                <input className="input" name="" placeholder="Nome"></input>
                <input className="input" name="" placeholder="Raça"></input>
                <input className="input" name="" placeholder="Espécie"></input>
                <input className="input" name="" placeholder="Sexo"></input>
                <input className="input" name="" placeholder="Cor"></input>

                <button type="submit" className="button-edit">Editar</button>
                
            </div>
        </div>
    );
}

export default EditarPet;