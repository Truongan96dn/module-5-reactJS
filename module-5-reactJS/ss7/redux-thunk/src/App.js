import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserList} from "./components/UserList";
import React from "react";
import {Provider} from "react-redux";
import {User} from "./components/User";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <>
                <User/>
                <UserList/>
            </>
        </Provider>
    );
}

export default App;
