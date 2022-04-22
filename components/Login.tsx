import { useState } from 'react';
import { auth, googleAuthProvider } from '../lib/firebase';

async function loginWithGoogle() {
  await auth.signInWithPopup(googleAuthProvider);
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <div className="container d-flex flex-column mt-5 ">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="email" className="flex-start form-label">
                Username/email
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                className="form-control"
                id="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button
              type="button"
              onClick={loginWithGoogle}
              className="btn btn-primary"
            >
              Login With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
