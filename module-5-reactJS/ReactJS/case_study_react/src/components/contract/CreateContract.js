import React from "react";
import {Field, Form, Formik} from "formik";
import * as contractService from "../../component-service/ContractService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
export function CreateContract() {
    const  navigate = useNavigate();
    return(
        <>
            <Formik initialValues={{
                contractNumber: "",
                startDate:"",
                endDate:"",
                deposit : null,
                total : null
            }} onSubmit={(values) => {
                const create = async ()=>{
                    await contractService.saveContract(values);
                    toast.success(<h2>Create succeed !</h2>)
                }
                create();
                navigate("/contract")
            }}>
                <Form>
                    <div className="formbold-main-wrapper">
                        <div className="formbold-form-wrapper">
                                <div>
                                    <h1 style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                                        {" "}
                                        Create New Contract{" "}
                                    </h1>
                                </div>
                                <div className="formbold-input-flex">
                                    <div>
                                        <Field type="text" className="formbold-form-input" name="contractNumber" id="contractNumber"/>
                                        <label className="formbold-form-label"> Contract Number </label>
                                    </div>
                                    <div>
                                        <Field type="text" className="formbold-form-input" name="startDate" id="startDate" />
                                        <label className="formbold-form-label"> Start Date </label>
                                    </div>
                                </div>
                                <div className="formbold-input-flex">
                                    <div>
                                        <Field type="text" className="formbold-form-input" name="endDate" id="endDate" />
                                        <label className="formbold-form-label"> End Date </label>
                                    </div>
                                    <div>
                                        <Field type="number" className="formbold-form-input" name="deposit" id="deposit"/>
                                        <label className="formbold-form-label">Deposit</label>
                                    </div>
                                </div>
                                <div className="formbold-input-flex" >
                                    <div>
                                        <Field type="number" className="formbold-form-input" name="total" id="total"/>
                                        <label className="formbold-form-label"> Total Payment </label>
                                    </div>
                                </div>
                                <button type="submit" className="formbold-btn">Create</button>
                        </div>
                    </div>

                </Form>
            </Formik>


        </>
    )

}