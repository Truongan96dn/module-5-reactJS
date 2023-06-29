
import React from "react";
import {Field, Form, Formik} from "formik";
import * as facilityService from "../../component-service/FacilitiesService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


export function CreateService() {
    const navigate = useNavigate();
    return(
        <>
           <Formik initialValues={{
               serviceName: "",
               serviceType : [],
               serviceArea: null,
               serviceCost: null,
               maxGuest: null,
               rentType : [],
               img:""

           }}
                   onSubmit={(values) => {
                       const create = async () =>{
                           await facilityService.saveService(values);
                           toast.success(<h2>Create Success</h2>)
                       }
                       create();
                       navigate("/body")
                   }}>
               {
                   <Form>
                       <div className="formbold-main-wrapper">
                           <div className="formbold-form-wrapper">
                                   <div>
                                       <h1 style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                                           {" "}
                                           Create New Service{" "}
                                       </h1>
                                   </div>
                                   <div className='mb-3 d-flex'>
                                       <label htmlFor='serviceType' className="formbold-form-label" >Type service </label>
                                       <Field as='select' name='serviceType' id='serviceType' class="form-select mx-2" style={{width: "18%",height:"10%"}} >
                                           <option value='Villa'>Villa</option>
                                           <option value='Room'>Room</option>
                                           <option value='House'>House</option>
                                       </Field>
                                   </div>
                                   <div className="formbold-input-flex">
                                       <div>
                                           <Field type="text" className="formbold-form-input" name="serviceName" id="serviceName"/>
                                           <label className="formbold-form-label"> Service Name </label>
                                       </div>
                                       <div>
                                           <Field type="number" className="formbold-form-input" name="serviceArea" id="serviceArea" />
                                           <label className="formbold-form-label"> Using Area </label>
                                       </div>
                                   </div>
                                   <div className="formbold-input-flex">
                                       <div>
                                           <Field type="number" className="formbold-form-input" name="serviceCost" id="serviceCost" />
                                           <label className="formbold-form-label"> Rental Price </label>
                                       </div>
                                       <div>
                                           <Field type="number" className="formbold-form-input" name="maxGuest" id="maxGuest"/>
                                           <label className="formbold-form-label"> Number of Person </label>
                                       </div>
                                   </div>
                                   <div>
                                       <div className='mb-3 d-flex'>
                                           <label htmlFor='rentType'>Type service </label>
                                           <Field as='select' name='rentType' id='rentType' class="form-select mx-2" style={{width: "18%",height:"10%"}}>
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
                                       {/*<div>*/}
                                       {/*    <Field type="text" className="formbold-form-input" />*/}
                                       {/*    <label className="formbold-form-label"> Room Standard </label>*/}
                                       {/*</div>*/}
                                   </div>
                                   {/*<div className="formbold-input-flex">*/}
                                   {/*    <div>*/}
                                   {/*        <Field type="number" className="formbold-form-input" />*/}
                                   {/*        <label className="formbold-form-label"> Number of Floors </label>*/}
                                   {/*    </div>*/}
                                   {/*    <div>*/}
                                   {/*        <Field type="number" className="formbold-form-input" />*/}
                                   {/*        <label className="formbold-form-label"> Swimming pool area </label>*/}
                                   {/*    </div>*/}
                                   {/*</div>*/}
                                   {/*<div className="formbold-input-flex">*/}
                                   {/*    <div>*/}
                                   {/*        <Field type="text" className="formbold-form-input" />*/}
                                   {/*        <label className="formbold-form-label">*/}
                                   {/*            {" "}*/}
                                   {/*            Another Comfortable Facilities*/}
                                   {/*        </label>*/}
                                   {/*    </div>*/}
                                   {/*</div>*/}
                                   {/*<div className="formbold-input-flex">*/}
                                   {/*    <div>*/}
                                   {/*        <input type="text" className="formbold-form-input" />*/}
                                   {/*        <label className="formbold-form-label">*/}
                                   {/*            {" "}*/}
                                   {/*            Another Comfortable Facilities*/}
                                   {/*        </label>*/}
                                   {/*    </div>*/}
                                   {/*    <div>*/}
                                   {/*        <input type="text" className="formbold-form-input" />*/}
                                   {/*        <label className="formbold-form-label"> Complimentary service </label>*/}
                                   {/*    </div>*/}
                                   {/*</div>*/}
                                   <button type="submit" className="formbold-btn">Create</button>
                           </div>
                       </div>


                   </Form>
               }

           </Formik>



        </>
    )

}