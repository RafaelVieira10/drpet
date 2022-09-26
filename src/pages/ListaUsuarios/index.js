import React from "react";
import './style.css';

function ListaUsuarios() {
    return(
        <div className="container-lista-usuarios">
            <div>
                <h2>Lista usuários</h2>
            </div>

            <div className="container-cards-lista">

                <div className='cards-lista'>
                    <p><strong>Nome: </strong></p>
                    <p><strong>E-mail:</strong> </p>
                </div>
                <div className='cards-lista'>
                    <p><strong>Nome: </strong></p>
                    <p><strong>EMAIL:</strong> </p>
                </div>
                <div className='cards-lista'>
                    <p><strong>Nome: </strong></p>
                    <p><strong>EMAIL:</strong> </p>
                </div>
                <div className='cards-lista'>
                    <p><strong>Nome: </strong></p>
                    <p><strong>EMAIL:</strong> </p>
                </div>
                <div className='cards-lista'>
                    <p><strong>Nome: </strong></p>
                    <p><strong>EMAIL:</strong> </p>
                </div>
                <div className='cards-lista'>
                    <p><strong>Nome: </strong></p>
                    <p><strong>EMAIL:</strong> </p>
                </div>
            </div>
        </div>
    );
}

export default ListaUsuarios;
