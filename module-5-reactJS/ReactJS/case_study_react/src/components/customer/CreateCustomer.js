import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import React from "react";
import * as customerService from "../../component-service/CustomerService";
import {toast} from "react-toastify";

export function CreateCustomer() {
    const navigate = useNavigate();

    return (
        <>
            <Formik initialValues={{
                name: "",
                birthday: "",
                gender: [],
                personalId: "",
                phone: "",
                email: "",
                typeOfCustomer: [],
                address: ""
            }} onSubmit={(values) => {
                const create = async () => {
                    await customerService.saveCustomer(values);
                    toast.success(<h2>Create Success</h2>)
                }
                create()
                navigate("/customer")
            }}>


                <Form>
                    <div className="formbold-main-wrapper">
                        <div className="formbold-form-wrapper">
                                <div>
                                    <h1 style={{textAlign: "center", marginBottom: "2.5rem"}}>
                                        {" "}
                                        Create New Customer{" "}
                                    </h1>
                                </div>
                                <div className="formbold-input-flex">
                                    <div>
                                        <Field type="text" className="formbold-form-input" name="name" id="name"/>
                                        <label className="formbold-form-label"> Name </label>
                                    </div>
                                    <div>
                                        <Field type="text" className="formbold-form-input" name="birthday" id ="birthday"/>
                                        <label className="formbold-form-label"> Birthday </label>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className='mb-3 d-flex'>
                                        <label htmlFor='gender' className="formbold-form-label">Gender</label>
                                        <Field as='select' name='gender' id='gender' class="form-select mx-2"
                                               style={{width: "61%", height: "61%"}}>
                                            <option disabled > Select </option>
                                            <option value='Male'>Male</option>
                                            <option value='Female'>Female</option>
                                            <option value='Other'>Other</option>
                                        </Field>
                                    </div>
                                    <div className='mb-3 d-flex'>
                                        <label htmlFor='typeOfCustomer' className="formbold-form-label">Type of Customer</label>
                                        <Field as='select' name='typeOfCustomer' id='typeOfCustomer' class="form-select mx-2"
                                               style={{width: "50%", height: "61%"}}>
                                            <option value='Diamond'>Diamond</option>
                                            <option value='Gold'>Gold</option>
                                            <option value='Platinum'>Platinum</option>
                                            <option value='Member'>Member</option>
                                            <option value='Silver'>Silver</option>
                                        </Field>
                                    </div>
                                </div>

                                <div className="formbold-input-flex">
                                    <div>
                                        <Field type="text" className="formbold-form-input" name="personalId" id="personalId"/>
                                        <label className="formbold-form-label"> personal ID</label>
                                    </div>
                                    <div>
                                        <Field type="text" className="formbold-form-input" name="address" id="address"/>
                                        <label className="formbold-form-label"> Address</label>
                                    </div>
                                </div>
                                <div className="formbold-input-flex">
                                    <div>
                                        <Field type="text" className="formbold-form-input" name="phone" id="phone"/>
                                        <label className="formbold-form-label"> Phone Number </label>
                                    </div>
                                    <div>
                                        <Field type="text" className="formbold-form-input" name="email" id="email"/>
                                        <label className="formbold-form-label"> Email </label>
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