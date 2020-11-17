import React, { Component } from 'react';
import CartItem from './CartItem';
import Header from './Header';
import { connect } from 'react-redux';
import { checkout, removeFromCart } from '../actions';
import { getTotal, getCartProducts } from '../reducers'; 

interface CartProps {
  products: any,
  total: number,
  error: string, 
  removeFromCart: any,
  image: string
}



class Cart extends Component<CartProps> {
  getTotalAmount(total, tax, shipping) {
    return parseInt(total)+tax+shipping;
  }
  render() {
    const { products, total, error, removeFromCart } = this.props;
    const totalAmount = total > 0 ? this.getTotalAmount(total, 7.50, 5.00) : 0.00;

    const hasProducts = products.length > 0
    const checkoutAllowed = hasProducts;

    const nodes = !hasProducts ? (
      <em>Please add some products to cart.</em>
    ) : (
        products.map(product => (
          <CartItem
            image={product.image}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
            onRemove={() => removeFromCart(product.id)}
          />
        ))
      )

    return (
      <div>
        <Header page="Cart" />
        <div className="checkout-container">
          <div className="left-container">
            <h3>Shipping Address</h3>
            <div className="gray-container">
              <form>
                <label><span>Address 1: </span>667</label>
                <label><span>Address 2: </span>Lakeshore Lane</label>
                <label><span>Address 3: </span>60621</label>
                <label><span>City: </span>IL</label>
                <label><span>State: </span>Chicago</label>
              </form>
            </div>
            <div className="button-container">
              <button className="gray-button-cls" >Save Address</button>
              <button className="gray-button-cls" >Edit Address</button>
            </div>
          </div>
          <div className="right-container">
            <h3>Shopping Bag</h3>
            <div className="gray-container">
              {nodes}
            </div>
            <div className="payment-info">
              <h3>Payment Info</h3>
              <div><span>Item Price:</span><span>{`$${total}.00`}</span></div>
              <div><span>Tax:</span><span>$7.50</span></div>
              <div><span>Shopping Charge:</span><span>$5.00</span></div>
              <div className="total-price"><span>Total:</span><span>{`$${totalAmount}.00`}</span></div>
            </div>
            <div className="button-container">
              <button className="gray-button-cls" >Checkout</button>
              <button className="gray-button-cls" >Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({
    products: getCartProducts(state),
    total: getTotal(state),
  }),
  { checkout, removeFromCart },
)(Cart)
