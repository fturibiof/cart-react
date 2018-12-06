import React, { Component } from 'react';
import './App.css';
import Cart from '../Cart';

class App extends Component {
  state = {
    products:[
      {
      id:1,
      name:"Computador",
      price:1999.99
    },
    {
      id:2,
      name:"Celular",
      price:1200.01,
    }
    ],
    total:0
  };

  deleteProduct(id) {
    this.setState({
      products: this.state.products.filter(product => product.id !== id)
    });

  }
  // componentDidUpdate(){
  //   let parcial = 0;
  //   for (var i = 0; i < this.state.products.length; i++) {
  //     parcial+=this.state.products[i].price;
  //     console.log(parcial);
  //     this.setState({total:parcial});
  //     console.log(this.state);
  //   }
  // }
  render() {
    return (
      <div className="App">
        <Cart products={this.state.products} total={this.state.total} onDeleteProduct={this.deleteProduct.bind(this)}/>
      </div>
    );
  }
}

export default App;
