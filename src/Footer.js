import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/page1">Страница 1</Link>
          </li>
          <li>
            <Link to="/page2">Страница 2</Link>
          </li>
          <li>
            <Link to="/page3">Страница 3</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
