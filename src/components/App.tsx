import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import MyOrders from './MyOrders';
import Cart from './Cart';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" component={ProductList} exact />
				<Route path="/details" component={ProductDetails} />
				<Route path="/orders" component={MyOrders} />
				<Route path="/checkout" component={Cart} />
			</Switch>
		)
	}
}
