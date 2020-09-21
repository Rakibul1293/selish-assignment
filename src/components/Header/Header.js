import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from "../Auth/Auth";

const Header = () => {
    const auth = useAuth();
    console.log(auth);
    // const { user, ...best } = useAuth();
    // console.log(auth.user, best);

    const handleSignOut = () => auth.signOut();

    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                {/* {auth && auth.user && <span style={{ color: 'white' }}>{auth.user.displayName}</span>} */}
                {
                    // auth && !auth.user ? <button onClick={() => auth.signinWithGoogle()}>Sign in</button>
                    //     : <button onClick={() => auth.signout()}>Sign Out</button>
                }
                {
                    auth.user && <span style={{ color: 'Yellow' }}>Welcome {auth.user.displayName}</span>
                }
                {
                    auth.user ?
                        <a href="/" onClick={handleSignOut}>Sign Out</a>
                        : <a href="/login">Sign In</a>

                }


            </nav>
        </div>
    );
};

export default Header;