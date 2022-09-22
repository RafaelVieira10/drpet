import './style.css';
import { Link } from 'react-router-dom';


function Home() {
    return(
        <div className="container">
            <div className="container-center">
                <div className="textos">
                    <h2>Agende uma consulta</h2>

                    <p>
                        Ao longo dos anos sempre nos dedicamos em gerar conhecimento e contribuir para o aperfeiçoamento de nossos profissionais, 
                        estimulando a disseminação de conteúdo técnico, atualizações e a realização de cursos e especializações.
                    </p>

                    <Link to={"/RegistrarProcedimentos"}><button className='button-agende-home'>AGENDE AGORA</button></Link>

                </div>
                    <img src="assets/dogHome.png" alt="" className='img-dog-home'/>
            </div>
        </div>
    );
}

export default Home;