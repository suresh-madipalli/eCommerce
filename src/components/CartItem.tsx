import React, { Component } from 'react';
interface InnerTypeProps {
	title: string,
	price: number,
	image: any,
	quantity: any,
	onRemove: any
}

export default class CartItem extends Component<InnerTypeProps>{
	render() {
		const { image, price, quantity, title, onRemove } = this.props

		return (
			<div className="cart-items" >
				<div className="item product-img">
					<img src={require(`../assets/${image}`)} />
				</div>
				<div className="item product-title-quantity">
					<span>Title: {title}</span>
					<span>Quantity: {quantity}</span>
				</div>
				<div className="item product-price">
					<span>Price: {`$${price}.00`}</span><br />
				</div>
				<div className="item remove-btn">
					<button onClick={onRemove}>Delete</button>
				</div>
			</div>
		)
	}
}

