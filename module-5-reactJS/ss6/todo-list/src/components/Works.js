import React, {useEffect, useState} from "react";
import * as workService from '../services/WorkService';
import {Field, Form, Formik} from "formik";
import 'react-toastify/dist/ReactToastify.css'
export function Work() {
    useEffect(() => {
        const fetchApi = async () => {
            const result = await workService.findAll()
            setlistTodo(result);
        }
        fetchApi();
    }, [])
    return (
        <>
            <Formik initialValues={
                {title: ""}
            } onSubmit={(values => {
                const create = async () => {
                    await workService.createTodo(values)
                    setlistTodo(await workService.findAll());

                }
                create();

            })}>
                <div className="container">
                    <h1>Todo List</h1>
                    <Form>
                        <div className="form-floating">
                            <Field className="form-control" placeholder="Enter Todo "
                                   id="floatingTextarea" name='title'/>
                            <button className='btn btn-secondary' type='submit'>Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
            <ul>
                {
                    listTodo.map((todo) => (
                        <li key={todo}>{todo.title}</li>
                    ))
                }
            </ul>
        </>
    )
}
