import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            item: event
        })
        console.log(this.state.item)

    }
    handleAddItem = () => {
        if (this.state.item !== '') {
            this.setState((prev) => ({
                list: [prev.item, ...prev.list],
                item: ''
            }))
        }
    }

    render() {
        return (
            <><input value={this.state.item} onChange={(event) => this.handleChange(event.target.value)}/>
                <button className="btn btn-danger" onClick={() => this.handleAddItem()}>ADD</button>
                <div>
                    <h1>Todo List</h1>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>job</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.list.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item}</td>
                            </tr>
                        ))
                        }</tbody>
                    </table>
                </div>

            </>
        )
    }
}

export default App;
