import React, { Component } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
interface ProductProps {
  product: any,
  onAddToCartClicked: any
}
export default class ProductItem extends Component<ProductProps> {
  render() {
    const { product } = this.props
    const addToCartAction = (
      <Link to={{ pathname: '/checkout', query: {} }} className="link-cls" >
        <button className="button-cls" onClick={this.props.onAddToCartClicked} >
          {product.inventory > 0 ? 'Buy Now' : 'Sold Out'}
        </button>
      </Link>
    )
    return (
      <Product product={product} action={addToCartAction} />
    )
  }
}
