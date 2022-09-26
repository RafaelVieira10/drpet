import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function EditarUsuario() {
  const { user, adm } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");
  const [editUser, setEditUser] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  function inputValue(e) {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  }

  async function editarPet(e) {
    e.preventDefault();
    const editUserJSON = JSON.stringify(editUser);

    const response = await api.put("usuarios.php", editUserJSON);
    console.log(response)
    setMensagem(response.data.mensagem)
  }

  useEffect(() => {
    async function getUser() {

      const response = await api.get(`usuarios.php/${user.idusuario}`);
      const usuario = await response.data;

      if (!response.data.erro) {
        if (usuario.idusuario === user.idusuario || adm) {
          setEditUser({
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            idusuario: usuario.idusuario
          });
        } else {
          navigate(-1);
        }
      } else {
        navigate(-1);
      }
    }

    getUser();
  }, []); // eslint-disable-line

  return (
    <div>
      <h1>Editar usuario</h1>
      <div>
        <form onSubmit={editarPet}>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              placeholder="Digite o novo nome."
              onChange={inputValue}
              value={editUser.nome}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Digite seu novo email."
              onChange={inputValue}
              value={editUser.email}
              required
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              name="senha"
              placeholder="Digite sua nova senha."
              onChange={inputValue}
              value={editUser.senha}
              required
            />
          </label>
          <input type="submit" value="Editar" />
        </form>
      </div>
      <p>{mensagem}</p>
      <p><button onClick={() => navigate(-1)}>Voltar</button></p>
    </div>
  );
}
