
import { Link } from "react-router-dom";
import "./style.css";

export default function Cadastrar() {
  return (
    <div className="container">
      <form className="forms">
        <div className="container_forms">
          <h1 className="titulo">CADASTRE-SE</h1>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
          />
          <input
            className="input"
            type="text"
            placeholder="Digite seu email"
          />
          <input
            className="input"
            type="number"
            placeholder="Digite seu cpf"
          />
          <input
            className="input"
            type="password"
            placeholder="Digite sua senha"
          />
          <button className="botao">Cadastrar</button>

          <Link to={"/Login"} className="link-login">
            Login
          </Link>
        </div>
        <div className="divDog">
          {/* <img src="/assets/dogCadastrar.png" alt=""></img> */}
        </div>
        
      </form>
    </div>
  );
}