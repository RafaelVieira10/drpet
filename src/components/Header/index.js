import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser} from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';



function Header() {

    function clicar() {
        let nav = document.querySelector(".dp-menu");

        nav.classList.toggle('active-nav')
    }
   

    return(
        <header>
           <div className="logo"> 
                <div className="icon">           
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faPaw} className="icone-logo"  />
                    </Link>
                </div>
                <div className='title-logo'>
                    <Link to={"/"}>
                        <h2>DR PET</h2>
                    </Link>
                </div>
           
            </div>
                <div className='menu-mobile' onClick={clicar}>
                    <div className='linha'></div>
                    <div className='linha'></div>
                    <div className='linha'></div>
                </div>

             <div className="container-nav">
                <div className="nav">
                    <nav className='dp-menu'>
                        <ul className='menu'>
                            <li>
                                <Link  to={"/"}>Home</Link>
                            </li>

                            <li>
                                <Link to={"/CadastrarPet"}>Agendamentos</Link>
                            </li>
                        
                                <li>
                                    <Link to={"/ProcedimentosEfetuados"} className="">Meus Pets</Link>
                                </li>

                             <li>   
                                <Link to={"/Perfil"}>
                                    <FontAwesomeIcon icon={faCircleUser} className="icone-user"  />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    
                </div>

            </div> 
        </header>
    );
}

export default Header;

