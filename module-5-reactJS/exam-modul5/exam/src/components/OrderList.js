import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as orderService from "../service/OrderService";


export function OrderList() {
    const [orders, setOrder] = useState([]);
    const fetchApi = async () => {
        const res = await orderService.findAllOrder();
        setOrder(res)
    }
    const deleteOrder = async (id) => {
        await orderService.deleteOrder(id);
        fetchApi();
    }

    useEffect(() => {
        fetchApi();


    }, [])
    if (!orders) {
        return null
    }

        return (
        <>
            <div className="text-right">
                <button className="button-35">
                    <Link to="/create" style={{textDecoration: "none"}}
                    >
                        Add New Order
                    </Link>
                </button>
            </div>
            <div>
            </div>
            <div align="center">
                <h1> Customer List</h1>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col"> Order Code</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Buy Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Actions</th>

                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((order,index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{order.id}</td>
                                <td>{order.orderCode}</td>
                                <td>
                                    {order.product.productName}
                                </td>
                                <td>{order.buyDate}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.total}</td>
                                <td className="d-flex">
                                    {/*<button className=" button-45 mx-2" style={{textDecoration:"none",backgroundColor:"aliceblue"}}>*/}
                                    {/*    <Link to={`/updateCustomer/${customer.id}`} style={{textDecoration:"none"}} >Edit</Link> </button>*/}
                                    <button
                                        type="button" className=" button-45"
                                        onClick={() =>deleteOrder(order.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>


            </>
    )

}

