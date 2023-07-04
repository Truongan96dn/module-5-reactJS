import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import * as orderService from "../service/OrderService";
import {useNavigate} from "react-router-dom";
import {findAllProduct} from "../service/ProductService";
import * as Yup from 'yup';


export function CreateOrder() {
    const navigate = useNavigate();
    const [products, setProduct] = useState([]);
    const getProduct = async () => {
        const res = await findAllProduct();
        setProduct(res);
    }
    useEffect(() => {
        getProduct();
    })

    return (

        <>
            <Formik initialValues={{
                orderCode: "",
                productId: null,
                buyDate: null,
                price: null,
                quantity: null,
                total: null
            }}
                    validationSchema={Yup.object({
                        orderCode: Yup.string().required("Required !"),
                        productId: Yup.number().required("Required !"),
                        buyDate: Yup.string()
                            .required('Required !')
                            .matches(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/, ' Please input with format dd/MM/YYYY !'),
                        price: Yup.number().required("Required !").min(0, "minus price not allow !"),
                        quantity: Yup.number().required("Required !").min(1, "quantity over 0"),
                        total: Yup.number().required("Required !").min(1, "total over 0 !")
                    })}

                    onSubmit={(values) => {
                        const create = async () => {
                            await orderService.saveOrder(values);
                            alert("them moi thanh cong ")
                        }
                        create()
                        navigate("/")
                    }
                    }>
                <Form>
                    <div className="main-wrapper">
                        <div className="form-wrapper">
                            <div>
                                <h1 style={{textAlign: "center", marginBottom: "2.5rem"}}>
                                    {" "}
                                    Create New Order{" "}
                                </h1>
                            </div>
                            <div className="input-flex" >
                                <div>

                                    <label className="formbold-form-label"> Order Code </label>
                                    <Field type="text" className="form-input" name="orderCode" id="orderCode"/>
                                    <ErrorMessage name="orderCode" component="span" className="error-r"/>
                                </div>
                                <div className='mb-3 d-flex'>
                                    <label className="formbold-form-label"> Product</label>
                                    <Field name="productId" id="productId" as="select">
                                        <option value={0}>Please select</option>
                                        {products.map((product, index) => (
                                            <option key={index} value={product.id}>
                                                {product.name}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>

                                </div>
                                <div>
                                    <ErrorMessage name="productId" component="span" className="error-r"/>
                                </div>
                            </div>
                            <div className="input-flex">
                                <div>
                                    <label className="form-label"> Buy Date </label>
                                    <Field type="text" className="form-input" name="buyDate" id="buyDate"/>
                                    <ErrorMessage name="buyDate" component="span" className="error-r"/>
                                </div>
                                <div>
                                    <label className="form-label"> price </label>
                                    <Field type="number" className="form-input" name="price" id="price"/>
                                    <ErrorMessage name="price" component="span" className="error-r"/>
                                </div>
                            </div>
                            <div className="input-flex">
                                <div>
                                    <label className="form-label"> Quantity</label>
                                    <Field type="number" className="form-input" name="quantity" id="quantity"/>
                                    <ErrorMessage name="quantity" component="span" className="error-r"/>
                                </div>
                                <div>
                                    <label className="form-label"> Total </label>
                                    <Field type="number" className="form-input" name="total" id="total"/>
                                    <ErrorMessage name="total" component="span" className="error-r"/>
                                </div>
                            </div>
                            <div className="formbold-input-flex">
                                <div>

                                </div>
                            </div>
                            <button type="submit" className="btn btn-success">Create</button>
                        </div>
                    </div>

                </Form>
            </Formik>

        </>
    )

}