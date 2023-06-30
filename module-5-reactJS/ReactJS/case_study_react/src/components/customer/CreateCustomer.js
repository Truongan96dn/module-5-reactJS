import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import React from "react";
import * as customerService from "../../component-service/CustomerService";
import {toast} from "react-toastify";
import * as Yup from 'yup';

export function CreateCustomer() {
    const navigate = useNavigate();

    return (
        <>
            <Formik initialValues={{
                name: "",
                birthday: "",
                gender: "Male",
                personalId: "",
                phone: "",
                email: "",
                typeOfCustomer: "Diamond",
                address: ""
            }} validationSchema={Yup.object({
                name: Yup.string().required("Required !").matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/, "Follow Name Format ! ex : Nguyen Van A"),
                birthday: Yup.string().required("Required !"),
                personalId: Yup.string().required("Required !").matches(/^\d{9}$|\d{12} $/, "personal ID must have 9 number or 12 number !"),
                phone: Yup.string().required("Required !").matches(/^((\+84)|0)(90|91)\d{7}$/, "Please input phone number 090xxxxxxx or 091xxxxxxx or (84)+90xxxxxxx or (84)+91xxxxxxx.\n"),
                email: Yup.string().required("Required !").matches(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/, "Invalid Email"),
                address: Yup.string().required("Required !")
            })

            }
                    onSubmit={(values) => {
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
                                    <Field type="date" className="formbold-form-input" name="birthday" id="birthday"/>
                                    <label className="formbold-form-label"> Birthday </label>
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <ErrorMessage name="name" component="span" className="error-r"/>
                                </div>
                                <div>
                                    <ErrorMessage name="birthday" component="span" className="error-r"/>
                                </div>
                            </div>
                            <div className="d-flex" style={{justifyContent: "space-between"}}>
                                <div className='mb-3 d-flex'>
                                    <label htmlFor='gender' className="formbold-form-label">Gender</label>
                                    <Field as='select' name='gender' id='gender' class="form-control"
                                           style={{width: "61%", height: "61%"}}>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                        <option value='Other'>Other</option>
                                    </Field>
                                </div>
                                <div className='mb-3 d-flex'>
                                    <label htmlFor='typeOfCustomer' className="formbold-form-label">Type of
                                        Customer</label>
                                    <Field as='select' name='typeOfCustomer' id='typeOfCustomer'
                                           class="form-select mx-2"
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
                                    <Field type="text" className="formbold-form-input" name="personalId"
                                           id="personalId"/>
                                    <label className="formbold-form-label"> personal ID</label>
                                </div>
                                <div>
                                    <Field type="text" className="formbold-form-input" name="address" id="address"/>
                                    <label className="formbold-form-label"> Address</label>
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <ErrorMessage name="personalId" component="span" className="error-r"/>
                                </div>
                                <div>
                                    <ErrorMessage name="address" component="span" className="error-r"/>
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
                            <div className="formbold-input-flex">
                                <div>
                                    <ErrorMessage name="phone" component="span" className="error-r"/>
                                </div>
                                <div>
                                    <ErrorMessage name="email" component="span" className="error-r"/>
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