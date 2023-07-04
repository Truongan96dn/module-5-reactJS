import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as contractService from "../../component-service/ContractService";
import ReactPaginate from "react-paginate";
import * as customerService from "../../component-service/CustomerService";
import * as facilityService from "../../component-service/FacilitiesService";

export function ContractList() {

    const [contracts, setContract] = useState([]);
    const fetchApi = async () => {
        const res = await contractService.findAllContract();
        setContract(res);
    }
    const [customer,setCustomer] = useState([]);
    const findAllCus = async ()=> {
       const res = await customerService.findAll()
        setCustomer(res)
    }
    const [service,setService] = useState([]);
    const  findAllService = async ()=>{
        const res = await facilityService.findAll()
        setService(res)
    }



    const [pageCount, setpageCount] = useState(0);
    let limit = 5;
    const getComments = async () => {
        const res = await fetch(
            `http://localhost:8080/contracts?_page=1&_limit=${limit}`
            // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
        );
        const data = await res.json();
        const total = res.headers.get("x-total-count");
        setpageCount(Math.ceil(total / limit));
        // console.log(Math.ceil(total/12));
        setContract(data);
    };
    useEffect(() => {
        fetchApi()
        getComments();
        findAllCus();
        findAllService();
    }, [limit]);
    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `http://localhost:8080/contracts?_page=${currentPage}&_limit=${limit}`
            // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };
    const handlePageClick = async (data) => {

        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setContract(commentsFormServer);
        // scroll to the top
        //window.scrollTo(0, 0)
    };


    return (
        <>
            <>
                <div className="text-right">
                    <button className="button-35">
                        <Link to="/createContract" style={{textDecoration: "none"}}
                        >
                            Add New Contract
                        </Link>
                    </button>
                </div>
                <div align="center">
                    <h1> Contract List</h1>
                    <div className="container">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Contract Number</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Deposit</th>
                                <th scope="col">Total Payment</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                contracts.map((contract) => (
                                    <tr key={contract.id}>
                                        <td>{contract.id}</td>
                                        <td>{contract.contractNumber}</td>
                                        <td>{customer.find((cus) => cus.id == contract.customerId) ?.name}</td>
                                        <td>{service.find((service) => service.id == contract.serviceId) ?.serviceName}</td>
                                        <td>{contract.startDate}</td>
                                        <td>{contract.endDate}</td>
                                        <td>{contract.deposit}</td>
                                        <td>{contract.total}</td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>

                </div>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
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