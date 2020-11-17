import React, { Component } from 'react';
import { Link } from 'react-router-dom';
interface ProductProps {
  product: any,
  action: any
}
export default class Product extends Component<ProductProps> {
  render() {
    const { product, action } = this.props;
    const { image = "../assets/default.jpg", description, title } = product;
    return (
      <div className="book">
        <div className='produt-image'>
          <Link to={{ pathname: '/details', query: product }} ><img src={require(`../assets/${image}`)} /></Link>
        </div>
        <div className="title" title={title}>{title}</div>
        <div className="description" title={description}>{description}</div>
        <div>{action}</div>
      </div>
    )
  }
}

