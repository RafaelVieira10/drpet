import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser} from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';



function Header() {
    return(
        <header>
           <div className="logo"> 
                <div className="icon">           
                    <FontAwesomeIcon icon={faPaw} className="icone-logo"  />
                </div>
                <div>
                    <h2>DR PET</h2>
                </div>
            </div>

             <div className="container-nav">
                <div className="nav">
                    <nav className='dp-menu'>
                        <ul className='menu'>
                            <li>
                                <Link  to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Agendamentos</Link>
                            </li>
                        
                                <li>
                                    <Link to={"/CadastrarPet"} className="">Meus Pets</Link>
                                    <ul className='sub-menu'>
                                        <div className='teste'>
                                        <li>
                                            <Link to={"/CadastrarPet"} className="">Cadastrar</Link>
                                        </li>
                                        <li>
                                            <Link to={"/EditarPet"} className="" >Editar</Link>
                                        </li>
                                        </div>
                                    </ul>
                                </li>
                            <Link to={"/AlterarInformacoes"}>
                                <FontAwesomeIcon icon={faCircleUser} className="icone-user"  />
                            </Link>
                        </ul>
                    </nav>
                    
                </div>

            </div> 
        </header>
    );
}

export default Header;

