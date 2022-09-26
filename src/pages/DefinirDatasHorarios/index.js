import "./style.css";

export default function DefinirDatasHorarios() {
  return (
    <div className="containerVisualizarAgendar">
      <div className="containerInputVisualizar">
        <input
          className="inputVisualizarAgendar"
          type="texto"
          placeholder="Definir Datas Horarios Disponiveis"
        />
        <div className="cardVisualizarAgendar">
          <div className="containerVisualizarDatas">
            <div className="retanguloVisualizarData">
              <p className="Visualizardata">10/10/2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
