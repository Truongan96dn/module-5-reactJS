import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import * as bookService from "../services/BookService"
import {useNavigate} from "react-router-dom";
export function CreateBook() {
    const navigate = useNavigate()
    return(
        <>
            <Formik initialValues={{
                title : "",
                quantity : ""
            }} onSubmit={(values) => {
               const create = async () => {
                   await bookService.saveBook(values)
                   navigate('/')
               }
               create()
            }}>
                <div className="container">
                    <h1> Create New Book </h1>
                    <Form>
                        <label> new title </label>
                        <Field type="text" name="title" id="title" className="form-control" />
                        <label> Quantity</label>
                        <Field type="number" name="quantity" id="quantity" className="form-control"/>
                        <button type="submit" className="btn btn-primary"> Submit</button>
                    </Form>
                </div>

            </Formik>

        </>
    )

}