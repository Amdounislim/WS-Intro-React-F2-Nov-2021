import './App.css';
import NavBar from "./components/NavBar"
import {Main, Intro} from "./components/Main"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello</h1>
      <Main />
      <Intro />
      <Footer  />
    </div>
  );
}

export default App;
