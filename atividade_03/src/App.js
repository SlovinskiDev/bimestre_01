/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [addNumber, setAddNumber] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    const formatedNumber = parseInt(addNumber);
    if (!isNaN(formatedNumber)) {
      if (isAdding === true) {
        setCount(count + formatedNumber);
        setWarning(false);
      } else {
        setCount(count - formatedNumber);
        setWarning(false);
      }
    } else {
      setWarning(true);
    }
  }, [addNumber]);

  function submit() {
    setAddNumber(document.getElementById("textinput").value);
    setIsAdding(true);
    document.getElementById("textinput").value = "";
  }

  function subtract() {
    setAddNumber(document.getElementById("textinput").value);
    setIsAdding(false);
    document.getElementById("textinput").value = "";
  }

  function reset() {
    setAddNumber(0);
    setCount(0);
    document.getElementById("textinput").value = "";
  }

  return (
    <div className="App">
      <text className="text">Soma: {count}</text>
      <div>
        <input
          required
          id="textinput"
          name="textinput"
          type="number"
          pattern="[0-9]+$"
        />
      </div>
      {warning && <text>Informe somente números</text>}
      <div>
        <button
          className="buttonSubmit"
          onClick={submit}
          value="Enviar"
          id="add"
        >
          Adicionar
        </button>
        <button
          className="buttonSub"
          onClick={subtract}
          value="Enviar"
          id="remove"
        >
          Subtrair
        </button>
        <button className="buttonReset" onClick={reset} value="Enviar">
          Resetar
        </button>
      </div>
    </div>
  );
}

export default App;
