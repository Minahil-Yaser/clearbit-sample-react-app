const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#20a7db" }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a
              className="navbar-brand"
              href="/"
              style={{ color: "white", fontWeight: "bold" }}
            >
              B2B Helper
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
