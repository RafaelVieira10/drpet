import './style.css';
import { Link } from 'react-router-dom';

export default function MeusPets(props) {
    return (
        <div className='containerMeusPets'>
            <div className='containerCard_MeusPets'>
                <div className='card'>
                    <div className='texto_card'>
                        <p>nome:</p>
                        <p>raça:</p>
                        <p>Espécie:</p>
                        <p>Sexo:</p>
                        <p>Cor:</p>

                        <div className='botao_MeusPets'>
                            <Link to={"/EditarPet"} id='editar_MeusPets'>Editar</Link>
                            <button id="apagar_MeusPets">Apagar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerCard_MeusPets'>
                <div className='card'>
                    <div className='texto_card'>
                        <p>nome:</p>
                        <p>raça:</p>
                        <p>Espécie:</p>
                        <p>Sexo:</p>
                        <p>Cor:</p>

                        <div className='botao_MeusPets'>
                            <Link to={"/EditarPet"} id='editar_MeusPets'>Editar</Link>
                            <button id="apagar_MeusPets">Apagar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerCard_MeusPets'>
                <div className='card'>
                    <div className='texto_card'>
                        <p>nome:</p>
                        <p>raça:</p>
                        <p>Espécie:</p>
                        <p>Sexo:</p>
                        <p>Cor:</p>

                        <div className='botao_MeusPets'>
                            <Link to={"/EditarPet"} id='editar_MeusPets'>Editar</Link>
                            <button id="apagar_MeusPets">Apagar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='containerCard_MeusPets'>
                <div className='card'>
                    <div className='texto_card'>
                        <p>nome:</p>
                        <p>raça:</p>
                        <p>Espécie:</p>
                        <p>Sexo:</p>
                        <p>Cor:</p>

                        <div className='botao_MeusPets'>
                            <Link to={"/EditarPet"} id='editar_MeusPets'>Editar</Link>
                            <button id="apagar_MeusPets">Apagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}