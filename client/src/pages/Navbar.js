import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">Cloudinary Media</div>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/upload">Upload</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
