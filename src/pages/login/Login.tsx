import { useState } from "react";
import Home from "../home/Home";

function Login() {

 const[isLogged, setisLogged] = useState(false); 

  return (
    <>
      {
        isLogged ?(
          <Home 
          titulo="Bem Vinde" 
          texto="Essa é a pagina inicial" 
          Logout={() => setisLogged(false)}
          />

        )  :(
          <div>
            <h2>
              Componente Login
            </h2>
            <button onClick={()=>setisLogged(true)}>Entrar</button>
          </div>
        )
      }
    </>
  )
}

export default Login