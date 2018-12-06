import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';
import './ProductName.css';
import './ProductPrice.css';
import './ProductDelete.css';

const Product = ({name, price, onDelete}) => (
	<div className="Product">
  <span className="ProductName">{name}</span>
  <span className="ProductPrice">{price}</span>
	<button className="ProductDelete" onClick={onDelete}>X</button>
	</div>
)

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
};


export default Product;
