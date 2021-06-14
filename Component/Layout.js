// import Footer from "./Footer";
// import Navbar from "./Navbar";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark customNav">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Nikol's Gallery</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link href="/">
                <a className="nav-link" aria-current="page">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
              <Link href="/gallery">
                <a className="nav-link">Gallery</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <div class="fixed-bottom">
        <footer>Copyright 2021 Blog App Design by Nicholas Alvi Saputra</footer>
      </div>
    </div>
  );
};

export default Layout;
