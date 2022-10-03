import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

function Header() {
  const { logout, authenticated, adm } = useContext(AuthContext);

  function clicar() {
    let nav = document.querySelector(".dp-menu");

    nav.classList.toggle("active-nav");
  }

  return (
    <header>
      <div className="logo">
        <div className="icon">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faPaw} className="icone-logo" />
          </Link>
        </div>
        <div className="title-logo">
          <Link to={"/"}>
            <h2>DR PET</h2>
          </Link>
        </div>
      </div>
      <div className="menu-mobile" onClick={clicar}>
        <div className="linha"></div>
        <div className="linha"></div>
        <div className="linha"></div>
      </div>

      {authenticated ? (
        <div className="container-nav">
          <div className="nav">
            <nav className="dp-menu">
              {adm ? (
                <ul className="menu">
                  <li>
                    <Link to={"/adm-dashboard"}>ADM Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={() => logout()} className="sair">
                      <FontAwesomeIcon
                        icon={faRightToBracket}
                        className="sair-icone"
                      />
                    </button>
                  </li>
                  <li>
                    <Link to={"/dashboard/editar-dados"}>
                      <FontAwesomeIcon
                        icon={faCircleUser}
                        className="icone-user"
                      />
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="menu">
                  <li>
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard/agendamentos"}>Agendamentos</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard/pet"} className="">
                      Pets
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => logout()} className="sair">
                      <FontAwesomeIcon
                        icon={faRightToBracket}
                        className="sair-icone"
                      />
                    </button>
                  </li>
                  <li>
                    <Link to={"/dashboard/editar-dados"}>
                      <FontAwesomeIcon
                        icon={faCircleUser}
                        className="icone-user"
                      />
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      ) : (
        <div className="container-nav">
          <div className="nav">
            <nav className="dp-menu">
              <ul className="menu">
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/cadastro"}>Cadastro</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
