import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-brand" data-item="MEDIA FROM YAYA">
        MEDIA FROM YAYA
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/" data-item="Gallery">
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/upload" data-item="Upload">
            Upload
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" data-item="About">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
