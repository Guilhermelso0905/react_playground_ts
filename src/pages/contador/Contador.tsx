import { useState } from "react"

function Contador() {

const [valor, setValor ] = useState(0);

  function adcionarClick(){
    setValor(valor + 1);
  }
  function subtrairClick(){
    setValor(valor - 1);
  }
  function dobrarClick(){
    setValor(valor * 2);
  }
  function dividirClick(){
    setValor(valor / 2);
  }

  return (
    <div>
      <h2>Componente Contador</h2>
      <p>O valor atual é: {valor}</p>
      <button onClick={adcionarClick}>Adicionar 1</button>
      <button onClick={subtrairClick}>Diminuir 1</button>
      <button onClick={dobrarClick}>Dobrar</button>
      <button onClick={dividirClick}>Dividir por 2</button>
    </div>
  )
}

export default Contador