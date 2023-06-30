import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as facilityService from "../../component-service/FacilitiesService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as Yup from 'yup';


export function CreateService() {
    const navigate = useNavigate();
    const [type, setType] = useState("Villa")
    return (
        <>
            <Formik initialValues={{
                serviceName: "",
                serviceType: "Villa",
                serviceArea: null,
                serviceCost: null,
                maxGuest: null,
                rentType: "Date",
                roomStandard: "",
                numberOfFloor: null,
                anotherDes: "",
                poolArea: "",
                freeService: "",
                img: ""


            }} validationSchema={Yup.object({

                serviceName: Yup.string()
                    .required('Required !')
                    .matches(/^[^\d\s]+(?: [^\d\s]+)*$/, ' Number is not permitted !'),
                serviceArea: Yup.number()
                    .required('Required')
                    .min(0, 'over 0'),
                serviceCost: Yup.number()
                    .required('Required').min(0,"over 0"),
                maxGuest: Yup.number()
                    .required('Required')
                    .min(0, 'over 0'),
                // anotherDes: Yup.string()
                //     .required('Required'),
                // roomStandard: Yup.string()
                //     .required('Required'),
                // numberOfFloor: Yup.number()
                //     .required('Required')
                //     .min(0, 'over 0'),
                // poolArea: Yup.number()
                //     .required('Required')
                //     .min(0, 'over 0'),
                // freeService: Yup.string()
                //     .required('Required'),
                img: Yup.string()
                    .required('Required')

            })}
                    onSubmit={(values, {setSubmitting}) => {
                        const create = async () => {
                            setSubmitting(false)
                            await facilityService.saveService(values);
                            toast.success(<h2>Create Success</h2>)
                        }
                        create();
                        navigate("/body")
                    }}>
                {
                    ({setFieldValue}) => (
                        <Form>
                            <div className="formbold-main-wrapper">
                                <div className="formbold-form-wrapper">
                                    <div>
                                        <h1 style={{textAlign: "center", marginBottom: "2.5rem"}}>
                                            {" "}
                                            Create New Service{" "}
                                        </h1>
                                    </div>
                                    <div className='mb-3 d-flex'>
                                        <label htmlFor='serviceType' className="formbold-form-label">Type
                                            service </label>
                                        <Field onChange={(event) => {
                                            setType(event.target.value);
                                            setFieldValue('serviceType', event.target.value);
                                        }}
                                               as='select' name='serviceType'
                                               id='serviceType'
                                               class="form-select mx-2"

                                               style={{width: "18%", height: "10%"}}
                                        >
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
                                            <ErrorMessage name="serviceName" component="span" className="error-r"/>
                                        </div>
                                        <div>
                                            <ErrorMessage name="serviceArea" component="span" className="error-r"/>
                                        </div>
                                    </div>
                                    <div className="formbold-input-flex">
                                        <div>
                                            <Field type="number" className="formbold-form-input" name="serviceCost"
                                                   id="serviceCost"/>
                                            <label className="formbold-form-label"> Rental Price </label>
                                        </div>
                                        <div>
                                            <Field type="number" className="formbold-form-input" name="maxGuest"
                                                   id="maxGuest"/>
                                            <label className="formbold-form-label"> Number of Person </label>
                                        </div>
                                    </div>
                                    <div className="formbold-input-flex">
                                        <div>
                                            <ErrorMessage name="serviceCost" component="span" className="error-r"/>
                                        </div>
                                        <div>
                                            <ErrorMessage name="maxGuest" component="span" className="error-r"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='mb-3 d-flex'>
                                            <label htmlFor='rentType'>Rent Type</label>
                                            <Field as='select' name='rentType' id='rentType' class="form-select mx-2"
                                                   style={{width: "18%", height: "10%"}}>
                                                <option value='Date'>Date</option>
                                                <option value='Year'>Year</option>
                                                <option value='Month'>Month</option>
                                                <option value='Hour'>Hour</option>
                                            </Field>
                                        </div>
                                        <div className="formbold-input-flex">
                                            <label className="formbold-form-label"> Image </label>
                                            <Field type="text" className="formbold-form-input" name="img" id="img"/>
                                            <div>
                                                <ErrorMessage name="img" component="span" className="error-r"/>
                                            </div>
                                        </div>

                                        {
                                            type === "House" ?
                                                <div>

                                                    <div className="formbold-input-flex">
                                                        <div>
                                                            <Field type="text" className="formbold-form-input"
                                                                   name="roomStandard" id="roomStandard"/>
                                                            <label className="formbold-form-label"> Room
                                                                Standard </label>
                                                        </div>
                                                        <div>
                                                            <Field type="number" className="formbold-form-input"
                                                                   name="numberOfFloor" id="numberOfFloor"/>
                                                            <label className="formbold-form-label"> Number of
                                                                Floors </label>
                                                        </div>
                                                    </div>
                                                    <div className="formbold-input-flex">
                                                        <div>
                                                            <ErrorMessage name="roomStandard" component="span" className="error-r"/>
                                                        </div>
                                                        <div>
                                                            <ErrorMessage name="numberOfFloor" component="span" className="error-r"/>
                                                        </div>
                                                    </div>
                                                    <div className="formbold-input-flex">
                                                        <div>
                                                            <Field type="text" className="formbold-form-input"
                                                                   name="anotherDes" id="anotherDes"/>
                                                            <label className="formbold-form-label">
                                                                {" "}
                                                                Another Comfortable Facilities
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="formbold-input-flex">
                                                        <div>
                                                            <ErrorMessage name="anotherDes" component="span" className="error-r"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                : ""
                                        }
                                        {type === "Villa" ?
                                            <div>

                                                <div className="formbold-input-flex">
                                                    <div>
                                                        <Field type="text" className="formbold-form-input"
                                                               name="roomStandard" id="roomStandard"/>
                                                        <label className="formbold-form-label"> Room Standard </label>
                                                    </div>
                                                    <div>
                                                        <Field type="number" className="formbold-form-input"
                                                               name="numberOfFloor" id="numberOfFloor"/>
                                                        <label className="formbold-form-label"> Number of
                                                            Floors </label>
                                                    </div>
                                                </div>
                                                <div className="formbold-input-flex">
                                                    <div>
                                                        <Field type="text" className="formbold-form-input"
                                                               name="anotherDes" id="anotherDes"/>
                                                        <label className="formbold-form-label">
                                                            {" "}
                                                            Another Comfortable Facilities
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <Field type="number" className="formbold-form-input"
                                                               name="poolArea" id="poolArea"/>
                                                        <label className="formbold-form-label"> Swimming pool
                                                            area </label>
                                                    </div>
                                                </div>
                                            </div>
                                            : ""
                                        }
                                        {type === "Room" ?
                                            <div className="formbold-input-flex">
                                                <div>
                                                    <Field type="text" className="formbold-form-input"
                                                           name="freeService" id="freeService"/>
                                                    <label className="formbold-form-label"> Complimentary
                                                        service </label>
                                                </div>
                                            </div>
                                            : ""
                                        }
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <button type="submit" className="formbold-btn" style={{width: "10vw"}}>Create
                                        </button>
                                    </div>

                                </div>
                            </div>


                        </Form>
                    )

                }

            </Formik>


        </>
    )

}