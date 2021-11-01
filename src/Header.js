import "./Header.css";

const Header = () => {

  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <span className="navbar-brand">
        <img
          src="herbie2.png"
          alt="Revenda Herbie"
          width="100"
          className="float-left mr-2"
        />
        <h3>Revenda Avenida</h3>
        <h5>Veículos em Destaque</h5>
      </span>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <span className="nav-link">
            <i className="fas fa-user-friends mr-2"></i>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;