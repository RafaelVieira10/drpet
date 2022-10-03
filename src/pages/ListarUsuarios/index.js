import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Usuarios from "../../components/Usuario";
import "./style.css";

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState();

  useEffect(() => {
    async function getUsuarios() {
      const response = await api.get("usuarios.php");
      console.log(response);
      let usuarios = await response.data;
      setUsuarios(
        usuarios.map((usuario) => {
          return <Usuarios key={usuario.idusuario} data={usuario} />;
        })
      );
    }
    getUsuarios();
  }, []);

  return (
    <div className="listar-usuarios">
      <div className="ListarUsuarios">
        <h1>Lista de usuarios</h1>
        <div className="usuarios">{usuarios}</div>
        <p>
          <Link className="voltar-usuarios" to="/adm-dashboard">
            Voltar
          </Link>
        </p>
      </div>
    </div>
  );
}
