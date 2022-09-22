import React from "react";
import './style.css';

function RegistrarProcedimentos() {
    return(
        <div className="container-registrar-procedimentos">
            <div className="container-inputs">
                <h2>Registrar procedimentos</h2>
                <div className="div-inputs">
                    <input placeholder="Nome"></input>
                    <input placeholder="CPF"></input>
                    <input placeholder="Procedimentos"></input>

                    <button>Registrar</button>

                </div>
            </div>

            <div className="div-image">
                <img src="assets/veterinary-amico.png" alt="" />
            </div>
        </div>
    );
}

export default RegistrarProcedimentos;