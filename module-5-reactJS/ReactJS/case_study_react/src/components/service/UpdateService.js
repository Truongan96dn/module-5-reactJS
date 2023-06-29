import React, {useEffect, useState} from "react";
import * as facilityService from "../../component-service/FacilitiesService";
import {Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";

export function UpdateService() {
    const param = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const findById = async () => {
        const res = await facilityService.findById(param.id)
        setService(res)
    }
    useEffect(() => {
        findById();
    }, [param.id])
    if (!service) {
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                id: service.id,
                serviceName: service.serviceName,
                serviceType: service.serviceType,
                serviceArea: service.serviceArea,
                serviceCost: service.serviceCost,
                maxGuest: service.maxGuest,
                rentType: service.rentType,
                img: service.img
            }} onSubmit={(values) => {
                const update = async () => {
                    await facilityService.updateService(values)
                    toast.success(<h2>Update Success</h2>)
                    navigate('/body')
                }
                update();
            }}>
                <Form>
                    <div className="formbold-main-wrapper">
                        <div className="formbold-form-wrapper">
                            <div>
                                <h1 style={{textAlign: "center", marginBottom: "2.5rem"}}>
                                    {" "}
                                    Update Service{" "}
                                </h1>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='serviceType'>Type service </label>
                                <Field as='select' name='serviceType' id='serviceType'>
                                    <option value='Villa'>Villa</option>
                                    <option value='Room'>Room</option>
                                    <option value='House'>House</option>
                                </Field>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <Field type="text" className="formbold-form-input" name="serviceName"
                                           id="serviceName"/>
                                    <label className="formbold-form-label"> Service Name </label>
                                </div>
                                <div>
                                    <Field type="number" className="formbold-form-input" name="serviceArea"
                                           id="serviceArea"/>
                                    <label className="formbold-form-label"> Using Area </label>
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>
                                    <Field type="number" className="formbold-form-input" name="serviceCost"
                                           id="serviceCost"/>
                                    <label className="formbold-form-label"> Rental Price </label>
                                </div>
                                <div>
                                    <Field type="number" className="formbold-form-input" name="maxGuest" id="maxGuest"/>
                                    <label className="formbold-form-label"> Number of Person </label>
                                </div>
                            </div>
                            <div>
                                <div className='mb-3'>
                                    <label htmlFor='rentType'>Type service </label>
                                    <Field as='select' name='rentType' id='rentType'>
                                        <option value='Year'>Year</option>
                                        <option value='Month'>Month</option>
                                        <option value='Date'>Date</option>
                                        <option value='Hour'>Hour</option>
                                    </Field>
                                </div>
                                <div className="formbold-input-flex">
                                    <label className="formbold-form-label"> Image </label>
                                    <Field type="text" className="formbold-form-input" name="img" id="img"/>
                                </div>
                                <button type="submit" className="formbold-btn">Update</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )

}