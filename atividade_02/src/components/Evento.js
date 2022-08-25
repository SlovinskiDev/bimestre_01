import "./styles.css";

export default function Evento({ nome, data, horario, local, cidade, genero }) {
  return (
    <div className="container">
      <h1>{nome}</h1>
      <text className="text">
        <text className="title">Data: </text>
        {data}
      </text>
      <div className="divider">
        <text>
          <text className="title">Horário: </text>
          {horario}
        </text>
      </div>
      <div className="divider">
        <text>
          <text className="title">Local: </text>
          {local}
        </text>
      </div>
      <div className="divider">
        <text>
          <text className="title">Cidade: </text>
          {cidade}
        </text>
      </div>
      <div className="divider">
        <text>
          <text className="title">Gênero: </text>
          {genero}
        </text>
      </div>
    </div>
  );
}
