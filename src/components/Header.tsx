import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {
	return (<div className="header">
		<div className="left-section"><h2 className="page-title">eCommerce Site {props.page ? " | " + `${props.page}` : ""}</h2></div>
		<div className="right-section">
			<ul className="header-nav">
				<li><Link to={{ pathname: '/', query: {} }} ><span className="span-link" >Home&nbsp;&nbsp;|</span></Link></li>
				<li><Link to={{ pathname: '/orders', query: {} }} ><span className="span-link" >My Orders&nbsp;&nbsp;|</span></Link></li>
				<li><Link to={{ pathname: '/checkout', query: {} }} ><span className="span-link" >Cart</span></Link></li>
			</ul>
		</div>
	</div>);
}