import {Link} from "react-router-dom";

export function Body() {
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
                            <div>
                                <button className="button-35">
                                    <Link to="/createService" style={{textDecoration:"none"}}
                                    >
                                        Add new Service
                                    </Link>
                                </button>
                            </div>
                            <div className="row room-grid">

                                <div className="col-sm-6 col-lg-4">
                                    <div className="room-card">
                                        <div className="room-card-photo">
                                            <img width="370" height="239"
                                                 src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                                                 className="img-fluid wp-post-image" alt=""
                                                 srcSet="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg 370w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-300x194.jpg 300w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-768x497.jpg 768w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-871x563.jpg 871w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-145x94.jpg 145w, https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature.jpg 900w"
                                                 sizes="(max-width: 370px) 100vw, 370px"></img>
                                        </div>
                                        <div className="room-card-info">
                                            <div className="row">
                                                <div className="col">
                                                    <h3 className="room-type"><a
                                                        href="https://furamavietnam.com/vi/rooms/ocean-suite/">
                                                        Villa</a></h3>
                                                </div>
                                                <div className="col-auto ml-auto">
                                                    <div className="room-card-attr">
                                            <span data-toggle="popover" data-trigger="hover" data-placement="top"
                                                  data-content="2 Khách" data-original-title="" title=""><i
                                                className="icon-two-man"></i></span>
                                                        <span data-toggle="popover" data-trigger="hover"
                                                              data-placement="top"
                                                              data-content="Giường King" data-original-title=""
                                                              title=""><i
                                                            className="icon-double-size-bed"></i></span>
                                                        <span data-toggle="popover" data-trigger="hover"
                                                              data-placement="top"
                                                              data-content="Riêng Biệt" data-original-title="" title=""><i
                                                            className="icon-bathtub"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="room-size mt-0">Diện Tích Phòng: 85.8 m<sup>2</sup></div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="room-price"><span></span></div>
                                                </div>
                                                <div className="col-auto ml-auto">
                                                    <button type="button" className="btn btn-primary">
                                                        <Link  to="/updateService">Edit</Link>
                                                    </button>
                                                    <button type="button" className="btn btn-danger"
                                                            data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        Delete
                                                    </button>
                                                    <div className="popover-content d-none">
                                                        <ul>
                                                            <li>Thang Máy Riêng</li>
                                                            <li>Truy Cập Internet Miễn Phí</li>
                                                            <li>Toàn Cảnh Hướng Biển</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                        <div className="modal-body">bạn có muốn xoá dịch vụ này không ?</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">không
                            </button>
                            <button type="button" className="btn btn-primary">
                                Có
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}