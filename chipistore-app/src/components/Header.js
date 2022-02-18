
import { AmplifySignOut } from '@aws-amplify/ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './cart-icon/Cart-icon'

function Header() {
    return (
        <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/products">Crochet Dolls</Link>
                    <Link className="navbar-item" to="/checkout">Checkout</Link>
                    <CartIcon />
                </div>
            </div>
            <div class="navbar-end">
                <AmplifySignOut></AmplifySignOut>
            </div>
        </nav>
    )

}

export default Header
