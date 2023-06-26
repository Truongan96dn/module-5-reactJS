
import 'bootstrap/dist/css/bootstrap.min.css';
export function CreateService() {
    return(
        <>
            <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div>
                            <h1 style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                                {" "}
                                Create New Service{" "}
                            </h1>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Service Name </label>
                            </div>
                            <div>
                                <input type="number" className="formbold-form-input" />
                                <label className="formbold-form-label"> Using Area </label>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="number" className="formbold-form-input" />
                                <label className="formbold-form-label"> Rental Price </label>
                            </div>
                            <div>
                                <input type="number" className="formbold-form-input" />
                                <label className="formbold-form-label"> Number of Person </label>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Type of Rental </label>
                            </div>
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Room Standard </label>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="number" className="formbold-form-input" />
                                <label className="formbold-form-label"> Number of Floors </label>
                            </div>
                            <div>
                                <input type="number" className="formbold-form-input" />
                                <label className="formbold-form-label"> Swimming pool area </label>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label">
                                    {" "}
                                    Another Comfortable Facilities
                                </label>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label">
                                    {" "}
                                    Another Comfortable Facilities
                                </label>
                            </div>
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Complimentary service </label>
                            </div>
                        </div>
                        <button className="formbold-btn">Create</button>
                    </form>
                </div>
            </div>


        </>
    )

}