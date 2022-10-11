import { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  console.log(1);
  const location = useLocation();
  const isLocation = useCallback((path: string) => {
    return 'nav-link' + (location.pathname === path ? ' active' : '');
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={isLocation('/')} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isLocation('/todo')} to="/todo">
                Todo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
