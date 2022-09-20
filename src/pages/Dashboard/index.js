import { useContext } from "react"
import { AuthContext } from "../../context/auth"
import { Link } from "react-router-dom";

export default function Dashboard() {
  const {logout} = useContext(AuthContext);

  return (
    <div>
      <h1>Logado CLIENTE</h1>
      <p><button onClick={logout}>Sair</button></p>
      <p><Link to="/dashboard/meus-pets">Listar meus pets</Link></p>
    </div>
  )
}