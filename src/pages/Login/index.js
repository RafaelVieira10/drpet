import './style.css';
import { useState, useContext } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    senha: "",
  });

  const [loginError, setLoginError] = useState();

  const { authenticated, login } = useContext(AuthContext);

  function inputValue(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleLogin(e) {
    e.preventDefault();
    const loginJSON = JSON.stringify(user);
    console.log(loginJSON)
    try {
      const response = await api.put("login.php", loginJSON);
      if (!response.data.erro) {
        login(response.data.user[0])
      } else {
        setLoginError(response.data.mensagem)
      }
    } catch (err) {
      console.log(err);
    }

    setUser({
      email: "",
      senha: "",
    });
  }

  return (
    <div className="containerLogin">
      {/* <p>{String(authenticated)}</p> */}
      <form onSubmit={handleLogin} className="formsLogin">
        <div className="container_formsLogin">
          <h1 className="tituloLogin">LOGIN</h1>
            <input
            placeholder="usuario@exemplo.com"
              className="inputLogin"
              type="email"
              name="email"
              onChange={inputValue}
              value={user.email}
            />
         
            <input
            placeholder="Digite sua senha "
              className="inputLogin"
              type="password"
              name="senha"
              onChange={inputValue}
              value={user.senha}
            />

          <input type="submit" value="Login" className="botao_login" />
          <Link
            className="cadastrar"
            to={"/cadastro"}
          >
            Cadastre-se
          </Link>
        </div>
        {/* <div  className='divDogLogin' /> */}
      </form>
      <p>{loginError}</p>
    </div>
  );
}