import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

function NavBar() {
  const { user, username } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Portfolio</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {user ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/serviceworker">
                  <a className="nav-link">Service worker</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/todo">
                  <a className="nav-link">Todo</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/tictactoe">
                  <a className="nav-link">Tic Tac Toe</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/chat">
                  <a className="nav-link">Chat</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/wordle">
                  <a className="nav-link">Wordle Clone</a>
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
export default NavBar;
