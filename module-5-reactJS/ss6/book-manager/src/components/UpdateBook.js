import * as bookService from "../services/BookService";
import {Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import axios from "axios";

export function UpdateBook() {
    const [book, setBook] = useState()
    const navigate = useNavigate();
    const param = useParams();
    useEffect(() => {
        const findById = async () => {
            const res = await bookService.findById(param.id)
            setBook(res)
        }
        findById()
    }, [])
    if (!book) {
        return null;
    }

    return (
        <>
            <Formik initialValues={{
                id: book.id,
                title: book.title,
                quantity: book.quantity
            }} onSubmit={(values) => {
                const update = async () => {
                    await bookService.update(values)
                    navigate('/')
                }
                update()
            }}>
                <div className="container">
                    <h1> Update Book </h1>
                    <Form>
                        <label> new title </label>
                        <Field type="text" name="title" id="title" className="form-control"/>
                        <label> Quantity</label>
                        <Field type="number" name="quantity" id="quantity" className="form-control"/>
                        <button type="submit" className="btn btn-primary"> Update</button>
                    </Form>
                </div>
            </Formik>

        </>
    )

}