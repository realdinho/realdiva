import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  console.log('currentUser', currentUser);
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>Shop</Link>
        <Link className='option' to='/shop'>Contact</Link>
        {
          currentUser ?
          (<div className='option' onClick={() => auth.signOut() }>Sign Out</div>)
          :
          (<Link className='option' to='/auth'>Sign In</Link>)
        }
        <CartIcon />
      </div>
      <CartDropdown />
    </div>)
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);