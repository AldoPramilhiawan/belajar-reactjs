import logo from "./logo.svg";
import "./App.css";
import MyButton from "./Component/MyButton";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const App = () => {
  const navHeading = "NAvigation Bar";
  const navText = "Sosmed";

  const clicked = () => {
    return alert("Button di pencet")
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navTest={navText} navHeading={navHeading} /> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>hallo... Mr.Aldo</p>
        <MyButton clicked={clicked}/>
        <Footer />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
