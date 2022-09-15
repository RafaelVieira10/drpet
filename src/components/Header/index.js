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
                    <Link  to={"/"}>Home</Link>
                    <Link to={"/"}>Agendamentos</Link>
                    <Link to={"/EditarPet"}>Meus Pets</Link> 
                    <Link to={"/login"}>
                        <FontAwesomeIcon icon={faCircleUser} className="icone-user"  />
                    </Link>
                </div>

            </div> 
        </header>
    );
}

export default Header;

