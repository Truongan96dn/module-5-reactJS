import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as facilityService from "../../component-service/FacilitiesService";
import {toast} from "react-toastify";


export function ServiceList() {
    const [service,setService] = useState([])
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    const fetchApi = async () =>{
        const res = await facilityService.findAllFacilities()
        setService(res)
    }
    useEffect(()=>{
        fetchApi()
    },[])

    function handleDelete(id, nameService) {
        setIdDelete(id);
        setNameDelete(nameService);
    }

    const deleteService = async (id) =>{
        await facilityService.deleteService(id)
        fetchApi()
        toast.success(<h2>Delete Success</h2>)
    }


    return (
        <div>
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
                                    <Link to="/createService" style={{textDecoration:"none"}}
                                    >
                                        Add new Service
                                    </Link>
                                </button>
                            </div>
                            <div className="row room-grid">
                                {service.map((services)=>(
                                    <div className="col-sm-6 col-lg-4" key={services.id}>
                                        <div className="room-card" >
                                            <div className="room-card-photo" >
                                                <img  style={{width:"35vw",height : "20vw"}}
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
                                                <div className="room-size mt-0">Diện Tích Phòng: {services.serviceArea}<sup>2</sup></div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="room-price"><span></span></div>
                                                    </div>
                                                    <div className="col-auto ml-auto">
                                                        <div className="d-flex">
                                                            <button className=" button-45 mx-2" style={{textDecoration:"none",backgroundColor:"aliceblue"}}>
                                                                <Link  to={`/updateService/${services.id}`} style={{textDecoration:"none"}}>Edit</Link>
                                                            </button>
                                                            <button type="button" className=" button-45"
                                                                    data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleDelete(services.id,services.serviceName)}>
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
                        <div className="modal-body">bạn có muốn xoá dịch vụ  <span style={{color:"red"}}>{nameDelete}</span></div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">không
                            </button>
                            <button type="submit" className="btn btn-primary" onClick={()=>deleteService(idDelete)}  data-bs-dismiss="modal">
                                Có
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}