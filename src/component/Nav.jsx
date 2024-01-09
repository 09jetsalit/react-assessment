const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      style={{ borderBottom: "1px solid #000" }}
    >
      <div className="container-fluid ">
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <a className="nav-link active fw-bold"  aria-current="page" href={"/"}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fw-bold"
                aria-current="page"
                href={"/owner"}
              >
                Owner
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
