import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
      <Link className="header__title" to="/home">
          <h1>Home</h1>
        </Link> 
        <Link className="header__title" to="/menu">
          <h1>Menu</h1>
        </Link> 
        <Link className="header__title" to="/item">
          <h1>Item</h1>
        </Link> 
        <button onClick={startLogout}>Logout</button>
      </div>
    </div>

 
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
