import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="flex-header">
      <img
        src="https://i.ibb.co/Y7cHX31/websitelogo.png"
        alt=""
        className="nav-logo"
      />
      <div className="nav-menu">
        <Link to="/" className="no-decoration">
          <p className="nav-options">Home</p>
        </Link>
        <Link to="/journey" className="no-decoration">
          <p className="nav-options">The journey</p>
        </Link>
        <Link to="/team" className="no-decoration">
          <p className="nav-options">Team</p>
        </Link>
        <Link to="/store" className="no-decoration">
          <p className="nav-options">Store</p>
        </Link>
        <Link to="/contact" className="no-decoration">
          <p className="nav-options">Contact</p>
        </Link>
      </div>
      <div className="nav-user">
        {/* <p class="nav-options">user_img</p> */}
        <FaRegUserCircle />
        <p className="nav-options">Gagan</p>
      </div>
    </header>
  );
};

export { Nav };
