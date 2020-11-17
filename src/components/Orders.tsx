import React from 'react';
import { Link } from 'react-router-dom';

export default function Orders(props) {
	const orders = props.ordersData;
	return (
		<div className="orders">
			{orders.map(order => {
				return (
					<div key={order.id} className="order">
						<div className="top-section">
							<div>Order Placed: {order.ordered_date}</div>
							<div className="order-status">Status: {order.status}</div>
						</div>
						<div className="bottom-section">
							<div>
								<Link to={{ pathname: '/details', query: order }} ><img src={require(`../assets/${order.image}`)} /></Link>
							</div>
							<div className="details">
								<div><h3>{order.title}</h3></div>
								<div>{order.description}</div>
								<div>{`$${order.price}.00`}</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
