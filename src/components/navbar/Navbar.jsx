import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <p className="brand">E-Mart</p>
            <i className="fa-solid fa-store"></i>
          </div>
          <div className="search">
            <input className="search-bar" placeholder="Search Products" />
          </div>
          <div className="nav-buttons">
            <div>
              <button className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
            <div className="account">
              <button className="login">
                <i className="fa-solid fa-user icon"></i>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
