// import logo from "./logo.svg";
import "./App.css";
import "./components/HelloWorld";
import HelloWorld from "./components/HelloWorld";
import Card from "./components/Card";

// let texto = "ventilador potente do krai";
// function Paragrafo(texto) {
//   return <p>{texto}</p>;
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <HelloWorld />
        <Card 
          Title="Teste de titulo"
          Subtitle="Teste de subtitulo"
          Foto="https://picsum.photos/300/300.jpg"
        />
        {/* {Paragrafo(texto)} */}
      </header>
    </div>
  );
}

export default App;
