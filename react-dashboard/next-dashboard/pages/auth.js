// pages/auth.js
import { signIn } from 'next-auth/react';

const Auth = () => {
  return (
    <div>
      <h1>Authentication Page</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
};

export default Auth;
