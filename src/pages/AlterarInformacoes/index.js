import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGear, faLock, faPen,} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function AlterarInformacoes() {
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
                <button>
                    Informações pessoais
                    <FontAwesomeIcon icon={faGear} className="icon" />
                </button>

                <button>
                    Alterar senha
                    <FontAwesomeIcon icon={faLock} className="icon" />
                </button>

                <button>
                    Alterar E-mail
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </button>

            </div>

        </div>
    ); 
}

export default AlterarInformacoes;