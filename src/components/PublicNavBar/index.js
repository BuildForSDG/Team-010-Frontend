import React from 'react';
import Button from '../Button';
import './index.css';
import { Link } from 'react-router-dom';

export default () => (
  <nav>
    <ul className="brand-container">
      <li>
        <Link to="/">
          <h2>Farmhub</h2>
        </Link>
      </li>
    </ul>
    <ul className="links-container">
      <li>
        <ul>
          <li>
            <Link to="/">Market</Link>
          </li>
          <li>
            <Link to="/login">About</Link>
          </li>
          <li>
            <Link to="/login">Contact</Link>
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <Link to="/login">
              <Button>Sign in</Button>
            </Link>
          </li>
          <li>
            <Button>Sign up</Button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);
