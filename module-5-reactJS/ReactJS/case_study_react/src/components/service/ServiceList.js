import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as facilityService from "../../component-service/FacilitiesService";
import {toast} from "react-toastify";
import ReactPaginate from "react-paginate";
import {Home} from "../Home";


export function ServiceList() {
    const [service, setService] = useState([])
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();

    const [pageCount, setpageCount] = useState(0);
    let limit = 3;
    const getComments = async () => {
        const res = await fetch(
            `http://localhost:8080/service?_page=1&_limit=${limit}`
            // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
        );
        const data = await res.json();
        const total = res.headers.get("x-total-count");
        setpageCount(Math.ceil(total / limit));
        // console.log(Math.ceil(total/12));
        setService(data);
    };
    useEffect(() => {

        fetchApi()
        getComments();
    }, [limit]);
    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `http://localhost:8080/service?_page=${currentPage}&_limit=${limit}`
            // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };
    const handlePageClick = async (data) => {

        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setService(commentsFormServer);
        // scroll to the top
        //window.scrollTo(0, 0)
    };


    const fetchApi = async () => {
        const res = await facilityService.findAllFacilities()
        setService(res)
    }

    function handleDelete(id, nameService) {
        setIdDelete(id);
        setNameDelete(nameService);
    }

    const deleteService = async (id) => {
        await facilityService.deleteService(id)
        fetchApi()
        toast.success(<h2>Delete Success</h2>)
    }


    return (
        
        <div>
            <Home/>
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                </div>
                            </div>
                            <div className="text-right">
                                <button className="button-35">
                                    <Link to="/createService" style={{textDecoration: "none"}}
                                    >
                                        Add New Service
                                    </Link>
                                </button>
                            </div>
                            <div className="row room-grid">
                                {service.map((services) => (
                                    <div className="col-sm-6 col-lg-4" key={services.id}>
                                        <div className="room-card">
                                            <div className="room-card-photo">
                                                <img style={{width: "35vw", height: "20vw"}}
                                                     src={services.img}
                                                     className="img-fluid wp-post-image" alt=""
                                                     sizes="(max-width: 370px) 100vw, 370px"></img>
                                            </div>
                                            <div className="room-card-info">
                                                <div className="row">
                                                    <div className="col">
                                                        <h2 className="room-type">
                                                            {services.serviceName}</h2>
                                                    </div>
                                                    <div className="col-auto ml-auto">
                                                        <h3>
                                                            {services.serviceType}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="room-size mt-0">Area: {services.serviceArea + ' m'}
                                                    <sup>2</sup></div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="room-price"><span></span></div>
                                                    </div>
                                                    <div className="col-auto ml-auto">
                                                        <div className="d-flex">
                                                            <button className=" button-45 mx-2" style={{
                                                                textDecoration: "none",
                                                                backgroundColor: "aliceblue"
                                                            }}>
                                                                <Link to={`/updateService/${services.id}`}
                                                                      style={{textDecoration: "none"}}>Edit</Link>
                                                            </button>
                                                            <button type="button" className=" button-45"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModal"
                                                                    onClick={() => handleDelete(services.id, services.serviceName)}>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}


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
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Xác Nhận{" "}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">bạn có muốn xoá dịch vụ <span
                            style={{color: "red"}}>{nameDelete}</span></div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">không
                            </button>
                            <button type="submit" className="btn btn-primary" onClick={() => deleteService(idDelete)}
                                    data-bs-dismiss="modal">
                                Có
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}