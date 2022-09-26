import './style.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="containerLogin">
      <form className="formsLogin">
        <div className="container_formsLogin">
          <h1 className="tituloLogin">LOGIN</h1>
          <input
            className="inputLogin"
            type="text"
            placeholder="usuario@exemplo.com"
          />
          <input
            className="inputLogin"
            type="password"
            placeholder="digite sua senha"
          />
          <button className="botao_login">Login</button>
          <Link
            className="cadastrar"
            to={"/Cadastrar"}
          >
            Cadastre-se
          </Link>
        </div>
        <div  className='divDogLogin' />
      </form>
    </div>
  );
}