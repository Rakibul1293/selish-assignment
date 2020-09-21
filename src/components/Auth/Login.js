import React from 'react';
import Auth from './Auth';

const Login = () => {
  const auth = Auth();
  console.log(auth);
  console.log(auth.user);
  // console.log(auth.SignInWithGoogle);
  // console.log(auth.signOut);

  const handleSignIn = () => {
    auth.SignInWithGoogle()
      .then(res => {
        window.location.pathname = "/review";
      })
  }

  const handleSignOut = () => {
    auth.signOut()
      .then(res => {
        window.location.pathname = "/";
      })
  }

  return (
    <div>
      <h1>Join The Party</h1>
      {
        auth.user ? <button onClick={handleSignOut}>Sign Out</button>
          : <button onClick={handleSignIn}>Sign in with Google</button>
      }
    </div>
  );
};

export default Login;