import { Link } from "react-router-dom";
import "./style.css";

export default function Dashboard() {
  return (
    <div className="container-home">
      <div className="content-home">
        <div className="div-text-home">
          <h2>DR PET</h2>
          <p>
            Médicos veterinários de confiança e procedimentos desenvolvidos com
            carinho visando o bem-estar do seu bichinho, feito através de um
            atendimento domiciliar.
          </p>
          <Link to={"/dashboard/agendamentos"}>Agendar</Link>
        </div>
        <img src="./assets/medicine-bro.png" alt="" />
      </div>
    </div>
  );
}
