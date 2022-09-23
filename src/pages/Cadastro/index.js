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
    const userJSON = JSON.stringify({ 
      user: user,
    });

    console.log(userJSON)

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
    <div className="Cadastro">
      <form onSubmit={cadastrar}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome."
            onChange={inputValue}
            value={user.nome}
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail."
            onChange={inputValue}
            value={user.email}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha."
            onChange={inputValue}
            value={user.senha}
            required
          />
        </label>
        <label>
          CPF / CNPJ:
          <input
            type="text"
            name="cpf_cnpj"
            placeholder="Digite seu CPF / CNPJ."
            onChange={inputValue}
            value={user.cpf_cnpj}
            required
          />
        </label>
        <input type="submit" value="Cadastrar" />
      </form>
      <Link to="/">Voltar</Link>
      {mensagemCadastro}
    </div>
  );
}
