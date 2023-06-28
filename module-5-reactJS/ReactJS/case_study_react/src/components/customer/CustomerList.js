import {Link} from "react-router-dom";
import React from "react";

export function CustomerList() {
    return(
        <>
            <div className="text-right">
                <button className="button-35">
                    <Link to="/createCustomer" style={{textDecoration:"none"}}
                    >
                        Add new Customer
                    </Link>
                </button>
            </div>
            <div align="center">
                <h1> Customer List</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Personal ID</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Type of customer</th>
                        <th scope="col">Address</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Nguyen Phuc Quy</td>
                        <td>2000-11-12</td>
                        <td>Nam</td>
                        <td>202020202</td>
                        <td>090123231</td>
                        <td>quy123@gmail.com</td>
                        <td>Diamond</td>
                        <td>Quang Nam</td>
                        <td className="d-flex">
                            <button className=" button-45 mx-2" style={{textDecoration:"none",backgroundColor:"aliceblue"}}>
                                <Link to="/updateCustomer" style={{textDecoration:"none"}} >Edit</Link> </button>
                            <button
                                type="button"
                                className="button-45"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="demo">
                <nav className="pagination-outer" aria-label="Page navigation">
                    <ul className="pagination" style={{justifyContent:"center"}}>
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                4
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                5
                            </a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Delete
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">Do you want to delete customer</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-danger">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}