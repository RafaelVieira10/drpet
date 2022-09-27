import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCirclePlus, faEye } from '@fortawesome/free-solid-svg-icons';


function Pet() {
    return(
        <div className="container-pet">
            <div className="card-meus-pets">
                <h2>Meus pets</h2>
                <div className="icon">
                    <Link to={"/MeusPets"}>
                            <FontAwesomeIcon icon={faEye} className="icone-logo-pet"  />
                    </Link>
                </div>
            </div>
            <div className="card-adicionar-pets ">
                <h2>Adicionar pet</h2>
                <div className="icon">
                    <Link to={"/CadastrarPet"}>
                            <FontAwesomeIcon icon={faCirclePlus} className="icone-logo-pet"  />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Pet;