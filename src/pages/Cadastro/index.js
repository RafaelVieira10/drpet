import './style.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Cadastro() {
  const [user, setUser] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf_cnpj: "",
    adm: false,
  });

  const [mensagemCadastro, setMensagemCadastro] = useState();

  function inputValue(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function cadastrar(e) {
    e.preventDefault();
    const userJSON = JSON.stringify(user);

    try {
      const response = await api.post("usuarios.php", userJSON);
      if (response.data) {
        if (response.data.erro) {
          setMensagemCadastro(response.data.mensagem);
        } else {
          setMensagemCadastro(response.data.mensagem);
        }
      }
    } catch (err) {
      console.log(err);
    }

    setUser({
      nome: "",
      email: "",
      senha: "",
      cpf_cnpj: "",
      adm: false,
    });
  }

  return (
    <div className="container">
      <form onSubmit={cadastrar} className="forms">
        <div className="container_forms">
          <h1 className="titulo">CADASTRE-SE</h1>
            <input
            className="input"
              type="text"
              name="nome"
              placeholder="Digite seu nome."
              onChange={inputValue}
              value={user.nome}
              required
            />
          
        
            
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Digite seu e-mail."
              onChange={inputValue}
              value={user.email}
              required
            />
          
        
            
            <input
              className="input"
              type="password"
              name="senha"
              placeholder="Digite sua senha."
              onChange={inputValue}
              value={user.senha}
              required
            />
          
        
            
            <input
              className="input"
              type="text"
              name="cpf_cnpj"
              placeholder="Digite seu CPF / CNPJ."
              onChange={inputValue}
              value={user.cpf_cnpj}
              required
            />
          
          <input type="submit" value="Cadastrar" className="botao" />

          <Link to={"/Login"} className="link-login">
            Login
          </Link>
        </div>

        {/* <div className="divDog">
          <img src="/assets/dogCadastrar.png" alt=""></img>
        </div> */}

      {mensagemCadastro}
      </form>
  
    </div>
  );
}
