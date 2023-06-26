import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Medical() {
    return (
        <>
            <Formik initialValues={{
                name: "",
                personId: "",
                yearOfBirth: null,
                gender: 1,
                nation: "",
                company: "",
                department: "",
                healthInsurance: 0,
                city: "",
                district: "",
                ward: "",
                address: "",
                phone: "",
                email: "",
                travelInfo: "",
                symptomsInfo: "",
                contactInfo: "",
            }}

                    validationSchema={Yup.object({
                        name: Yup.string().required("Required !"),
                        personId: Yup.string().required("Required !"),
                        yearOfBirth: Yup.number().required("Required !").min(1901, "year of birth over 1900 !"),
                        nation: Yup.string().required("Required !"),
                        city: Yup.string().required("Required !"),
                        district: Yup.string().required("Required !"),
                        ward: Yup.string().required("Required !"),
                        address: Yup.string().required("Required !"),
                        phone: Yup.string().required("Required !"),
                        email: Yup.string().required("Required !").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address!"),
                    })}

                    onSubmit={(values) => {
                        console.log(values)
                        toast("Succeed !")
                    }}>
                <div className="container">
                    <h1>Medical declaration form</h1>
                    <Form className="col-6">
                        <div className="mb-3">
                            <label htmlFor="patientName" className="form-label">Name</label>
                            <Field type="text" className="form-control" id="name" name="name"/>
                            <ErrorMessage name="name" component="span" className="form-err"/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="patientID" className="form-label">Person ID</label>
                            <Field type="text" className="form-control" id="personId" name="personId"/>
                            <ErrorMessage name="personId" component="span" className="form-err"/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="patientName" className="form-label">Year of Birth</label>
                            <Field type="number" className="form-control" id="yearOfBirth" name="yearOfBirth"/>
                            <ErrorMessage name="yearOfBirth" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3">
                            <div>Gender :</div>
                            <div className="form-check form-check-inline my-4">
                                <Field className="form-check-input " type="radio" id="inlineRadio1"
                                       value="1" name='gender'/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline my-4">
                                <Field className="form-check-input " type="radio" id="inlineRadio2"
                                       value="2" name='gender'/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nation" className="form-label">Nation</label>
                            <Field type="text" className="form-control" id="nation" name="nation"/>
                            <ErrorMessage name="nation" component="span" className="form-err"/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="company" className="form-label">Company</label>
                            <Field type="text" className="form-control" id="company" name="company"/>
                            <ErrorMessage name="company" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="department" className="form-label">Department</label>
                            <Field type="text" className="form-control" id="department" name="department"/>
                            <ErrorMessage name="department" component="span" className="form-err"/>
                        </div>
                        <div className="my-4">
                            <label className="form-label" htmlFor="healthInsurance">Have medical insurance
                                card
                                yet ?</label>
                            <Field className="form-input " type="checkbox" name="healthInsurance"
                                   id="healthInsurance" value="1"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <Field type="text" className="form-control" id="city" name="city"/>
                            <ErrorMessage name="city" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="district" className="form-label">District</label>
                            <Field type="text" className="form-control" id="district" name="district"/>
                            <ErrorMessage name="district" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ward" className="form-label">Ward</label>
                            <Field type="text" className="form-control" id="ward" name="ward"/>
                            <ErrorMessage name="ward" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <Field type="text" className="form-control" id="address" name="address"/>
                            <ErrorMessage name="address" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <Field type="text" className="form-control" id="phone" name="phone"/>
                            <ErrorMessage name="phone" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="text" className="form-control" id="email" name="email"/>
                            <ErrorMessage name="email" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="travelInfo" className="form-label">In the past 14 days, which countries
                                have
                                you been to?</label>
                            <Field type="text" className="form-control" id="travelInfo" name="travelInfo"/>
                        </div>
                        <div className="form-floating">
                            <div><h4>In the past 14 days, have you had any of the following symptoms?</h4>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="fever" id="defaultCheck1"
                                       name='symptomsInfo'/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Fever
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="cough" id="defaultCheck2"
                                       name='symptomsInfo'/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    Cough
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="shortness"
                                       id="defaultCheck13"
                                       name='symptomsInfo'/>
                                <label className="form-check-label" htmlFor="defaultCheck13">
                                    Shortness of breath
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="pneumonia"
                                       id="defaultCheck14"
                                       name='symptomsInfo'/>
                                <label className="form-check-label" htmlFor="defaultCheck14">
                                    Pneumonia
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="sore throat"
                                       id="defaultCheck15"
                                       name='symptomsInfo'/>
                                <label className="form-check-label" htmlFor="defaultCheck15">
                                    Sore throat
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="exhausted"
                                       id="defaultCheck16"
                                       name='symptomsInfo'/>
                                <label className="form-check-label" htmlFor="defaultCheck16">
                                    Exhausted
                                </label>
                            </div>
                        </div>
                        <div className="form-floating">
                            <div><h4>In the past 14 days, have you been in contact with</h4>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="infected person"
                                       id="defaultCheck1"
                                       name='contactInfo'/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Infected person, suspected of having covid-19 disease !
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="people from countries"
                                       id="defaultCheck2"
                                       name='contactInfo'/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    People from countries with covid-19 disease
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="people with symptoms"
                                       id="defaultCheck13"
                                       name='contactInfo'/>
                                <label className="form-check-label" htmlFor="defaultCheck13">
                                    People with symptoms (fever, cough, shortness of breath...)
                                </label>
                            </div>
                        </div>
                        <div>
                            <button style={{alignItems: "center"}} type="submit"
                                    className="btn btn-secondary my-3">Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </Formik>


            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer/>
        </>
    )

}