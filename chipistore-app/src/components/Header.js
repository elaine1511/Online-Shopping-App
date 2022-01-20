
import { AmplifySignOut } from '@aws-amplify/ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './cart-icon/Cart-icon'
// import SearchPage from './pages/search/SearchPage';
function Header() {
    return (
        <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
            {/* <div class="navbar-brand">

                <form class="control has-icons-left">
                    <span class="icon is-left">
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </span>
                    <input class="input is-danger" type="text" placeholder="Search" />

                </form>


            </div> */}

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/products">Crochet Dolls</Link>
                    <Link className="navbar-item" to="/checkout">Checkout</Link>
                    <CartIcon />
                    {/* <SearchPage /> */}

                </div>
            </div>

            <div class="navbar-end">

                <AmplifySignOut></AmplifySignOut>

            </div>
        </nav>
    )

}

export default Header
