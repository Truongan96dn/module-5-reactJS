import {Link} from "react-router-dom"

export function Header() {
    return (
        <div>
            <header className="header">
                <div className="header-mobile-info">
                    <div className="header-mobile-slide info1">
                        <div className="inside">
                            <div className="row">
                                <div className="col-sm">
                                    <p>
                                        <i className="icon-viber"/>
                                        <a href="tel:http://+842363847333">+842363847333</a>
                                    </p>
                                </div>
                                <div className="col-sm mt-15 mt-sm-0">
                                    <p>
                                        <i className="icon-closed-envelope"/>
                                        <a href="mailto:reservation@furamavietnam.com">
                                            reservation@furamavietnam.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-mobile-slide info2">
                        <div id="googleMapHeader" className="google-map">
                            <div style={{height: "100%", width: "100%"}}/>
                            <div
                                style={{
                                    backgroundColor: "white",
                                    fontWeight: 500,
                                    fontFamily: "Roboto, sans-serif",
                                    padding: "15px 25px",
                                    boxSizing: "border-box",
                                    top: 5,
                                    border: "1px solid rgba(0, 0, 0, 0.12)",
                                    borderRadius: 5,
                                    left: "50%",
                                    maxWidth: 375,
                                    position: "absolute",
                                    transform: "translateX(-50%)",
                                    width: "calc(100% - 10px)",
                                    zIndex: 1
                                }}
                            >
                                <div>
                                    <img
                                        alt=""
                                        src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
                                        draggable="false"
                                        style={{
                                            padding: 0,
                                            margin: 0,
                                            border: 0,
                                            height: 17,
                                            verticalAlign: "middle",
                                            width: 52,
                                            userSelect: "none"
                                        }}
                                    />
                                </div>
                                <div style={{lineHeight: 20, margin: "15px 0px"}}>
            <span style={{color: "rgba(0, 0, 0, 0.87)", fontSize: 14}}>
              Trang này không thể tải Google Maps đúng cách.
            </span>
                                </div>
                                <table style={{width: "100%"}}>
                                    <tbody>
                                    <tr>
                                        <td style={{lineHeight: 16, verticalAlign: "middle"}}>
                                            <a
                                                href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=keyless#api-key-and-billing-errors"
                                                target="_blank"
                                                rel="noopener"
                                                style={{color: "rgba(0, 0, 0, 0.54)", fontSize: 12}}
                                            >
                                                Bạn có sở hữu trang web này không?
                                            </a>
                                        </td>
                                        <td style={{textAlign: "right"}}>
                                            <button className="dismissButton">OK</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="header-mobile-slide info3">
                        <div className="inside">
                            <div className="visible-xs visible-sm hidden-lg hidden-md">
                                <form
                                    action="https://furamavietnam.com/vi/"
                                    className="form-inline row"
                                    role="search"
                                    method="get"
                                >
                                    <div className="col pr-0">
                                        <input
                                            type="text"
                                            name="s"
                                            defaultValue=""
                                            placeholder="Search"
                                            className="form-control w-100"
                                        />
                                    </div>
                                    <div className="col-auto pl-0">
                                        <button className="btn btn-primary" type="submit">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {" "}
                        </div>
                    </div>
                    <div className="header-mobile-slide info4">
                        <div className="inside">
                            <div className="row">
                                <div className="col-sm">
                                    <p>
                                        <a href="#">English</a>
                                    </p>
                                    <p>
                                        <a href="#">German</a>
                                    </p>
                                </div>
                                <div className="col-sm">
                                    <p>
                                        <a href="#">France</a>
                                    </p>
                                    <p>
                                        <a href="#">Italian</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto col-sm-5 col-lg-3 d-flex align-items-center bestel-logo">
                                <a href="https://furamavietnam.com/vi/" className="header-logo">
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                                        alt="logo "
                                        className="img-fluid"
                                        width={63}
                                        height={100}
                                    />
                                </a>
                            </div>
                            <div className="col col-md-auto col-lg-3 d-flex">
                                <div className="catalog-widget d-none d-sm-block">
                                    <div
                                        className="catalog-widget-inside"
                                        style={{visibility: "visible"}}
                                    >
                                        <a
                                            href="https://www.tripadvisor.com/Hotel_Review-g298085-d302750-Reviews-Furama_Resort_Danang-Da_Nang_Quang_Nam_Province.html"
                                            target="_blank"
                                        >
                                            <div className="widget-tripadvisor">
                                                <div className="inside">
                                                    <div className="widget-tripadvisor-logo">
                                                        <img
                                                            src="https://smartdata.tonytemplates.com/bestel/wp-content/uploads/2018/05/widget-tripadvisor-logo.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="widget-tripadvisor-rating">
                                                        <img
                                                            src="https://furamavietnam.com/wp-content/uploads/2018/08/widget-tripadvisor-rating.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="widget-tripadvisor-text">2,746 Reviews</div>
                                                </div>
                                            </div>
                                        </a>
                                        <span className="catalog-widget-toggle js-catalog-widget-toggle"/>{" "}
                                    </div>
                                </div>
                                <div
                                    className="catalog-widget-mobile d-flex d-sm-none align-items-center mx-auto"></div>
                            </div>
                            <div className="col-sm-3 d-none d-lg-block">
                                <div className="header-contact d-flex">
                                    <div className="header-contact-icon">
                                        <i className="icon-placeholder"/>
                                    </div>
                                    <div className="header-contact-txt">
                                        <p>
                                            103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ hành
                                            Sơn, Tp. Đà Nẵng, Việt Nam{" "}
                                        </p>
                                        <p className="txt-sm">
                                            <span>7.0 km</span> từ Sân bay Quốc tế Đà Nẵng{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 d-none d-lg-block">
                                <div className="header-contact d-flex">
                                    <div className="header-contact-icon">
                                        <i className="icon-telephone"/>
                                    </div>
                                    <div className="header-contact-txt">
                                        <p className="txt-lg">84-236-3847 333/888 </p>
                                    </div>
                                </div>
                                <div className="header-contact d-flex">
                                    <div className="header-contact-icon">
                                        <i className="icon-closed-envelope"/>
                                    </div>
                                    <div className="header-contact-txt">
                                        <a href="mailto:reservation@furamavietnam.com">
                                            reservation@furamavietnam.com{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto ml-auto d-flex d-lg-none">
                                <button
                                    className="navbar-btn"
                                    data-target="#modalNavigation"
                                    data-toggle="modal"
                                >
                                    <i className="icon-menu"/>
                                </button>
                                <div
                                    className="modal fade modal-fullscreen-menu"
                                    id="modalNavigation"
                                >
                                    <button aria-label="Close" className="close" data-dismiss="modal">
                                        <i className="icon-close"/>
                                        CLOSE{" "}
                                    </button>
                                    <div className="modal-dialog">
                                        <ul
                                            id="menu-furama-vi"
                                            className="menu navbar-nav w-100 js-main-menu"
                                        >
                                            <li
                                                id="nav-menu-item-5006"
                                                className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                            >
                                                <a
                                                    href="https://furamavietnam.com/vi/the-resort/"
                                                    className="nav-link main-menu-link"
                                                >
                                                    GIỚI THIỆU
                                                </a>
                                            </li>
                                            <li
                                                id="nav-menu-item-5007"
                                                className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4985 current_page_item"
                                            >
                                                <Link to="/body"
                                                      className="nav-link main-menu-link"
                                                >
                                                    Danh sách dịch
                                                </Link>
                                            </li>
                                            <li
                                                id="nav-menu-item-5008"
                                                className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                            >
                                                <a
                                                    href="https://furamavietnam.com/vi/culinary/"
                                                    className="nav-link main-menu-link"
                                                >
                                                    ẨM THỰC
                                                </a>
                                            </li>
                                            <li
                                                id="nav-menu-item-5009"
                                                className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                            >
                                                <a
                                                    href="https://furamavietnam.com/vi/meeting-and-events/"
                                                    className="nav-link main-menu-link"
                                                >
                                                    HỘI NGHỊ VÀ SỰ KIỆN
                                                </a>
                                            </li>
                                            <li
                                                id="nav-menu-item-5010"
                                                className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                            >
                                                <a
                                                    href="https://furamavietnam.com/vi/spa-and-fitness/"
                                                    className="nav-link main-menu-link"
                                                >
                                                    SPA
                                                </a>
                                            </li>
                                            <li
                                                id="nav-menu-item-5011"
                                                className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                            >
                                                <a
                                                    href="https://furamavietnam.com/vi/recreation/"
                                                    className="nav-link main-menu-link"
                                                >
                                                    GIẢI TRÍ
                                                </a>
                                            </li>
                                            <li
                                                id="nav-menu-item-5012"
                                                className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                            >
                                                <a
                                                    href="https://furamavietnam.com/vi/destination/"
                                                    className="nav-link main-menu-link"
                                                >
                                                    ĐIỂM ĐẾN
                                                </a>
                                            </li>
                                            <li
                                                id="nav-menu-item-5013"
                                                className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                            >
                                                <a
                                                    href="https://furamavietnam.com/vi/furama-special-offers/"
                                                    className="nav-link main-menu-link"
                                                >
                                                    ƯU ĐÃI
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-wrapper">
                    <div className="header-nav js-header-nav sticky">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg">
                                <div className="navbar-collapse">
                                    <ul
                                        id="menu-furama-vi"
                                        className="menu navbar-nav w-100 js-main-menu"
                                    >
                                        <li
                                            id="nav-menu-item-5006"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <Link to="/home"

                                                  className="nav-link main-menu-link"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li
                                            id="nav-menu-item-5007"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4985 current_page_item"
                                        >
                                            <Link to="/body"

                                                  className="nav-link main-menu-link"
                                            >
                                                Danh sách dịch vụ </Link>
                                        </li>
                                        <li
                                            id="nav-menu-item-5010"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <Link
                                                to="/customer"
                                                className="nav-link main-menu-link"
                                            >
                                                Danh sách khách hàng
                                            </Link>
                                        </li>
                                        <li
                                            id="nav-menu-item-5010"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <Link
                                                to="/contract"
                                                className="nav-link main-menu-link"
                                            >
                                                Danh sách hợp đồng
                                            </Link>
                                        </li>
                                    </ul>
                                    {" "}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )

}
