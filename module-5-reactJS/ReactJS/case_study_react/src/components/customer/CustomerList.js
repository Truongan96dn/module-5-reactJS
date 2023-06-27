import {Link} from "react-router-dom";

export function CustomerList() {
    return(
        <>
            <div>
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
                        <td>
                            <button className="btn btn-info">
                                <Link to="/updateCustomer" >Edit</Link> </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Nguyen Manh</td>
                        <td>1998-11-12</td>
                        <td>Nam</td>
                        <td>2020202112</td>
                        <td>0901423412</td>
                        <td>manh123@gmail.com</td>
                        <td>Gold</td>
                        <td>Quang Nam</td>
                        <td>
                            <button className="btn btn-info">Edit</button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Nguyen Phuc</td>
                        <td>2002-11-12</td>
                        <td>Nam</td>
                        <td>202020202111</td>
                        <td>0901232312</td>
                        <td>quy12355@gmail.com</td>
                        <td>Diamond</td>
                        <td>Quang Nam 2</td>
                        <td>
                            <button className="btn btn-info">Edit</button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Nguyen Phuc Manh</td>
                        <td>2000-11-02</td>
                        <td>Nam</td>
                        <td>2022020202</td>
                        <td>090523231</td>
                        <td>quy23@gmail.com</td>
                        <td>Diamond</td>
                        <td>Quang Nam 1</td>
                        <td>
                            <button className="btn btn-info">Edit</button>
                            <button
                                type="button"
                                className="btn btn-danger"
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