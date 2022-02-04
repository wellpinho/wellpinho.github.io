import { Link } from 'react-router-dom'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

function Navbar() {
  const menuLabel = {
    logo: '<Wellington Pinho />',
    about: '<About Me />',
    portfolio: '<Portfolio />',
    contact: '<Contact />',
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">{menuLabel.logo}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">{menuLabel.about}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">{menuLabel.portfolio}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">{menuLabel.contact}</Link>
            </li>
          </ul>
          <FontWeight className="text-white">
            <Link to="/admin">Login <FontAwesomeIcon icon={faSignInAlt} size='lg' /></Link>
          </FontWeight>
        </div>
      </div>
    </nav>
  );
}

const FontWeight = styled.div`
  font-weight: 600;
`

export default Navbar;