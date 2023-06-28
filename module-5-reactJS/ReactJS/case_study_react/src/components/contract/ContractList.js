import {Link} from "react-router-dom";
import React from "react";

export function ContractList() {
    return(
        <>
            <>
                <div className="text-right">
                    <button className="button-35">
                        <Link to="/createContract" style={{textDecoration:"none"}}
                        >
                            Add new Contract
                        </Link>
                    </button>
                </div>
                <div align="center">
                    <h1> Contract List</h1>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Contract Number</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Deposit</th>
                            <th scope="col">Total Payment</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>04212131</td>
                            <td>2023-12-12</td>
                            <td>2023-12-15</td>
                            <td>500$</td>
                            <td>1000$</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>04212221</td>
                            <td>2023-01-12</td>
                            <td>2023-01-15</td>
                            <td>500$</td>
                            <td>1000$</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>04212531</td>
                            <td>2023-02-12</td>
                            <td>2023-02-15</td>
                            <td>500$</td>
                            <td>1000$</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>04212151</td>
                            <td>2023-11-12</td>
                            <td>2023-11-15</td>
                            <td>500$</td>
                            <td>1000$</td>
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
                            <div className="modal-body">Do you want to delete this contract</div>
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

        </>
    )

}