export function CreateCustomer() {
    return(
        <>
            <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div>
                            <h1 style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                                {" "}
                                Create New Customer{" "}
                            </h1>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Name </label>
                            </div>
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Birthday </label>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Gender </label>
                            </div>
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> personal ID</label>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Phone Number </label>
                            </div>
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Email </label>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Type of Customer </label>
                            </div>
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Address</label>
                            </div>
                        </div>
                        <button className="formbold-btn">Create</button>
                    </form>
                </div>
            </div>

        </>
    )

}