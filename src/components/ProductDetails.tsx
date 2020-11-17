import React, { useState } from 'react';
import Header from "./Header";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addToCart } from '../actions';

const ProductDetails = (props) => {
	const location = useLocation();
	if (location.query) {
		localStorage.setItem("details", JSON.stringify(location.query));
	}
	let details = JSON.parse(localStorage.getItem("details") || '{}');
	return (
		<div>
			<Header page={details.title} />
			<div className='product-details'>
				<div className="left-section"><img src={require(`../assets/${details.image}`)} /></div>
				<div className="right-section">
					<h3 className="title">Book {details.title}</h3>
					<div className="details">
						<span>Book Price: {`$${details.price}.00`}</span>
						<span>Author Name: {details.author}</span>
						<span>Page Numbers: {details.pages}</span>
						<span>ISBN: {details.isbn}</span>
					</div>
					<div className="button-container">
						<button className="button-cls" onClick={() => props.addToCart(details.id)} >Add to Cart</button>
						<Link to={{ pathname: '/checkout', query: {} }} ><button className="button-cls" onClick={() => props.addToCart(details.id)} >Buy Now</button></Link>
					</div>
					<div className="description">
						<p>{details.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default connect("", { addToCart })(ProductDetails);