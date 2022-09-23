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
    const loginJSON = JSON.stringify({ user });
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
    <div className="Login">
      <p>{String(authenticated)}</p>
      <form onSubmit={handleLogin}>
        <label>
          Digite o E-mail
          <input
            type="email"
            name="email"
            onChange={inputValue}
            value={user.email}
          />
        </label>
        <label>
          Digite a senha
          <input
            type="password"
            name="senha"
            onChange={inputValue}
            value={user.senha}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
      <Link to="/">Voltar</Link>
      <p>{loginError}</p>
    </div>
  );
}