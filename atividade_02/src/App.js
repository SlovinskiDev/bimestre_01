import './App.css';
import Evento from './components/Evento';
import TipoIngresso from './components/TipoIngresso';

function App() {
  return (
    <div className="App">
      <Evento cidade={"Campina Grande/PR"} data={"02 de Agosto de 2019 (sexta-feira)"} genero={"Arte em forma de SERTANEJO"} horario={"18:30 - 00h00"} local={"Parque do Povo"} nome={"Gustavo Lima"}/>
      <h1>Ingressos</h1>
      <TipoIngresso tipo={"Camarote (open bar)"} preco={"150,00"}/>
      <TipoIngresso tipo={"Camarote"} preco={"100,00"}/>
      <TipoIngresso tipo={"Front-stage"} preco={"60,00"}/>
      <TipoIngresso tipo={"Pista"} preco={"30,00"}/>
    </div>
  );
}

export default App;
