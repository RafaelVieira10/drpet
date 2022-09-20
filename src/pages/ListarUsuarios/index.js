import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api";
import Usuarios from "../../components/Usuario";

export default function ListarUsuarios() {
    const [usuarios, setUsuarios] = useState();

    useEffect(() => {
        async function getUsuarios() {
            const response = await api.get("usuarios.php")
            let usuarios = await response.data.users
            setUsuarios(usuarios.map((usuario) => {
                return <Usuarios key={usuario.id} data={usuario} />
            }))
        }

        getUsuarios()
    })


    return (
        <div className="ListarUsuarios">
            <h1>Listar Usuarios</h1>
            <p><Link to="/adm-dashboard">Voltar</Link></p>
            {usuarios}
        </div>
    )
}