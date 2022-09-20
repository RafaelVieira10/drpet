import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api";
import Pet from "../../components/Pet";

export default function ListarPets() {
    const [pets, setPets] = useState();

    useEffect(() => {
        async function getUsuarios() {
            const response = await api.get("animais.php")
            let pets = await response.data.animais
            setPets(pets.map((pet) => {
                return <Pet key={pet.id} pet={pet} positionOnLocalStorage={pet.id}/>
            }))
        }

        getUsuarios()
    })


    return (
        <div className="ListarPets">
            <h1>Listar Pets</h1>
            <p><Link to="/adm-dashboard">Voltar</Link></p>
            {pets}
        </div>
    )
}