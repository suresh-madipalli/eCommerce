import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Orders from "./Orders";
import Loader from "./loader";

const MyOrders = () => {
    const [orders, setOrders] = useState({ data: [] });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const fetchOrders = async () => {
        setLoading(true);
        setError(false);
        try {
            const result = await axios.get('http://localhost:8000/orders');
            const resdata = result.data;
            setOrders({ data: resdata });

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div>
            <div>
                <Header page="My Orders" />
                <div className="main-container" >
                    <Orders ordersData={orders.data} />
                </div>
            </div>
            <Loader loading={loading} />
        </div>
    );
}
export default MyOrders;
