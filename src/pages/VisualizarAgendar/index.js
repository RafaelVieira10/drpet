import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

export default function VisualizarAgendar() {
  return (
    <div className="containerVisualizarAgendar">
      <div className="containerInputVisualizar">
        <input
          className="inputVisualizarAgendar"
          type="texto"
          placeholder="Resgistre um novo agendamento"
        />
        <div className="cardVisualizarAgendar">
          <div className="containerVisualizarDatas">
            <div className="retanguloVisualizarData">
              <p className="Visualizardata">10/10/2022</p>
              <a href='/VisualizarAgendar'><FontAwesomeIcon icon={faCircleXmark} className="botaoVisualizar" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
