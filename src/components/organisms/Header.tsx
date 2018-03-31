import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <Link to="/">ホーム</Link>
      <Link to="/moments">モーメント</Link>
      <Link to="/notifications">通知</Link>
      <Link to="/#">メッセージ</Link>

      <button>ICON</button>

      <input type="text" />
      <button>MY ICON</button>
      <button>Tweet</button>
    </div>
  </header>
);

export default Header;
