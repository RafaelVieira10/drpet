import './style.css';
import { Link } from 'react-router-dom';
// import Header from '../Header';

function Home() {
    return(
        <div className="container">
            <div className="left-circle"></div>

            <div className="container-center">
                <div className="textos">
                    <h2>Agende uma consulta</h2>

                    <p>
                        Ao longo dos anos sempre nos dedicamos em gerar conhecimento e contribuir para o aperfeiçoamento de nossos profissionais, 
                        estimulando a disseminação de conteúdo técnico, atualizações e a realização de cursos e especializações.
                    </p>

                    <Link to={"/Agendamentos"}><button className='button-agende-home'>AGENDE AGORA</button></Link>

                </div>

                <div className="div-img">
                    <img src="assets/dogHome.png" alt="" className='img-dog-home'/>
                </div>
            </div>

            <div className="right-circle"></div>
        </div>
    );
}

export default Home;