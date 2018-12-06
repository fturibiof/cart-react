import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import './CartTitle.css';
import './CartTotal.css';

const CartHeader = ({title, total}) => (
  <div className="CartHeader">
    <h1 className="CartTitle">{title}</h1>
    <span className="CartTotal">{total}</span>
  </div>
)

CartHeader.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number
};

export default CartHeader;
