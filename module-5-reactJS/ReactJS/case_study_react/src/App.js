import logo from './logo.svg';
import './App.css';
import {Body} from "./components/Body";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div>
        <Header/>
        <Body/>
        <Footer/>

    </div>
  );
}

export default App;
