import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPen, faUserPen} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function Perfil() {
    return(
        <div className="container-alterar-infos">
            <div className="div-text-icon">
                <div className="div-texto">
                    <p><strong>Nome</strong></p>
                </div>
                <div className="div-icon">
                    <FontAwesomeIcon icon={faPen} className="icon-lapis" />
                </div>
            </div>

            <div className="div-buttons">
                <Link to={"/InformacoesPessoais"}>
                    Informações pessoais
                    <FontAwesomeIcon icon={faGear} className="icon" />
                </Link>

                <Link to={"/AlterarUsuario"}>
                    Editar conta
                    <FontAwesomeIcon icon={faUserPen} className="icon" />
                </Link>

            </div>

        </div>
    ); 
}

export default Perfil;