import {Component} from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class StudentInfoComponent extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    id: 1,
                    name: "Ho Truong An",
                    age: 28,
                    address: "Danang",
                },
                {
                    id: 2,
                    name: "Ho Ngoc",
                    age: 63,
                    address: "Danang",
                },
                {
                    id: 3,
                    name: "Ho Vu Hoang Mai",
                    age: 35,
                    address: "Danang",
                }, {
                    id: 4,
                    name: "Nguyen Thi Hanh",
                    age: 60,
                    address: "Danang",
                }
            ]
        }
    }

    render() {
        return (
            <>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    {
                        this.state.studentList.map((student) => (
                            <tbody>
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                            </tbody>

                        ))
                    }

                </table>
            </>
        )
    }
}

export default StudentInfoComponent;

