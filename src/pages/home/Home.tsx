interface homeprops{
  titulo: string;
  texto: string;
  Logout: () => void;
}

function Home(props: homeprops) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
      <button onClick={props.Logout}>Sair</button>
    </div>
  )
}

export default Home