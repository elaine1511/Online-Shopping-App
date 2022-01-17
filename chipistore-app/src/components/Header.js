import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './cart-icon/Cart-icon'
function Header() {
    return (
        <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a className='navbar-item' href='/'>
                    <img
                        alt=''
                        src='https://cdn.shopify.com/s/files/1/0434/3372/2007/files/logo_nguyen_b_n_8b720a5a-c431-4060-996d-daff622b232d_100x@2x.png?v=1629277705'
                        width="112"
                        height="20"
                    />
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/products">Crochet Dolls</Link>
                    <Link className="navbar-item" to="/checkout">Checkout</Link>
                    <CartIcon />
                </div>
            </div>

            <div class="navbar-end">

                <form class="control has-icons-left">
                    <span class="icon is-left">
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </span>
                    <input class="input is-danger" type="text" placeholder="Search" />

                </form>
            </div>
        </nav>
    )

}

export default Header
