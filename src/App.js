import React, { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const adicionar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const diminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const reset = () => {
    setContador(contador * 0);
  };

  return (
    // importar o hook useState() e montar a estrutura;
    //criar uma função
    // eventos onClick
    <main>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button onClick={adicionar}>+</button>
      <button onClick={diminuir}>-</button>
      <button onClick={reset}>Reset</button>
    </main>
  );
}
export default App;
