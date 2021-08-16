//importing all components
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
//initial state here it is parent for navbar and cart and its siblings 

class App extends React.Component {

  constructor () {
    super();//for parent class 
    this.state = {
      //products array
      products: [
        {
          price: 999,
          title: 'HeadPhones',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80',
          id: 1//not a prop just a unique identification for react
        },
        {
          price: 9999,
          title: 'Mobile Phone',
          qty: 2,
          img: 'https://images.unsplash.com/photo-1570965336147-c93dfee58c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
          id: 2
        },
        {
          price: 50000,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1559163499-413811fb2344?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          id: 3
        }
      ]
    }
    
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    //"this.setState" tells react to render the state else the quantity will increase but won't show
    //here we are passing by object  therefore no matter how many times we call it it will render only once(Batching) and reslt will be based on final call
    //rather than calling with previous state than it will maintain a queue 
    this.setState({
      products
    })
    // also this is async.
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please dec the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }
  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => (
      cartTotal = cartTotal + product.qty * product.price
    ))

    return cartTotal;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
