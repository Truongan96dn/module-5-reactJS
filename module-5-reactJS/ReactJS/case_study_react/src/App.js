import logo from './logo.svg';
import './App.css';
import {Body} from "./components/Body";
import {Routes,Route}from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<Header/>}/>
            <Route path={"/body"} element={<Body/>}/>
        </Routes>
    </div>
  );
}

export default App;
