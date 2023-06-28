export function CreateContract() {
    return(
        <>
            <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div>
                            <h1 style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                                {" "}
                                Create New Contract{" "}
                            </h1>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Contract Number </label>
                            </div>
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> Start Date </label>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="text" className="formbold-form-input" />
                                <label className="formbold-form-label"> End Date </label>
                            </div>
                            <div>
                                <input type="number" className="formbold-form-input" />
                                <label className="formbold-form-label">Deposit</label>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <input type="number" className="formbold-form-input" />
                                <label className="formbold-form-label"> Total Payment </label>
                            </div>
                        </div>
                        <button className="formbold-btn">Create</button>
                    </form>
                </div>
            </div>

        </>
    )

}