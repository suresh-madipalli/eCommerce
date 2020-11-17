import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Header from './Header';
import { connect } from "react-redux";
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products'

interface InnerProps {
	id: number,
	title: string,
	price: number,
	inventory: number,
}

interface ProductProps {
	products: any,
	addToCart: any
}

class ProductList extends Component<ProductProps> {
	render() {

		const { products, addToCart } = this.props;
		return (
			<div>
				<Header />
				{products.length
					? <div>
						<div className="books" >
							{products.map(product => (
								<ProductItem key={product.id} product={product} onAddToCartClicked={() => this.props.addToCart(product.id)} />
							))}
						</div>
					</div>
					: <div><h3>Loading...</h3></div>}
			</div>
		);
	}
}
export default connect(state => ({ products: getVisibleProducts(state.products) }), { addToCart })(ProductList);
