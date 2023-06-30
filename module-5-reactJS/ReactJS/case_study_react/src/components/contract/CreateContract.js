import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as contractService from "../../component-service/ContractService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as customerService from "../../component-service/CustomerService";
import * as facilityService from "../../component-service/FacilitiesService";
import * as Yup from 'yup';

export function CreateContract() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState([]);
    const [serviceId, setServiceId] = useState();
    const findAllCus = async () => {
        const res = await customerService.findAll()
        setCustomer(res)
    }
    const [service, setService] = useState([]);
    const findAllService = async () => {
        const res = await facilityService.findAll()
        setService(res)
    }
    useEffect(() => {
        findAllCus()
        findAllService()
    }, [])

    return (
        <>
            <Formik initialValues={{
                contractNumber: "",
                customerId: null,
                serviceId: null,
                startDate: "",
                endDate: "",
                deposit: null,
                total: null,

            }}
                    validationSchema={Yup.object({
                        contractNumber: Yup.string().required("Required !"),
                        startDate: Yup.string().required("Required !"),
                        endDate: Yup.string().required("Required !"),
                        deposit: Yup.number().required("Required !").min(0, "over 0"),
                        // serviceId: Yup.number().min(1,"Required !"),
                        customerId: Yup.number().required("Required !")
                    })}

                    onSubmit={(values) => {
                        const create = async () => {
                            values = {
                                ...values,
                                total: service.find((ser) => ser.id == serviceId)?.serviceCost,
                                serviceId: serviceId
                            }
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
                                <h1 style={{textAlign: "center", marginBottom: "2.5rem"}}>
                                    {" "}
                                    Create New Contract{" "}
                                </h1>
                            </div>
                            <div>
                                <Field
                                    onChange={(values) => setServiceId(values.target.value)}
                                    name="serviceId"
                                    className="form-control"
                                    as="select"
                                    type="number"
                                >
                                    <option value={0}>Select Service Name</option>
                                    {service.map((ser) => (
                                        <option key={ser.id} value={ser.id}>
                                            {ser.serviceName}
                                        </option>
                                    ))}
                                </Field>
                                <div>
                                    <ErrorMessage name="serviceId" component="span" className="error-r"/>
                                </div>


                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <Field type="text" className="formbold-form-input" name="contractNumber"
                                           id="contractNumber"/>
                                    <label className="formbold-form-label"> Contract Number </label>
                                </div>
                                <div>
                                    <Field
                                        name="customerId"
                                        className="form-control"
                                        as="select"
                                        type="number"
                                    >
                                        <option value={0}>Select Customer</option>
                                        {customer.map((cus) => (
                                            <option key={cus.id} value={cus.id}>
                                                {cus.name}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <ErrorMessage name="contractNumber" component="span" className="error-r"/>
                                </div>
                                <div>
                                    <ErrorMessage name="customerId" component="span" className="error-r"/>
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <Field type="date" className="formbold-form-input" name="startDate" id="startDate"/>
                                    <label className="formbold-form-label"> Start Date </label>
                                </div>
                                <div>
                                    <Field type="date" className="formbold-form-input" name="endDate" id="endDate"/>
                                    <label className="formbold-form-label"> End Date </label>
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <ErrorMessage name="startDate" component="span" className="error-r"/>
                                </div>
                                <div>
                                    <ErrorMessage name="endDate" component="span" className="error-r"/>
                                </div>
                            </div>

                            <div className="formbold-input-flex">
                                <div>
                                    <Field type="number" className="formbold-form-input" name="deposit" id="deposit"/>
                                    <label className="formbold-form-label">Deposit</label>
                                </div>
                                <div>
                                    <Field type="number" disabled
                                           name="total"
                                           value={service.find((ser) => ser.id == serviceId)?.serviceCost}/>
                                    <label className="formbold-form-label"> Total Payment </label>
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <ErrorMessage name="deposit" component="span" className="error-r"/>
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