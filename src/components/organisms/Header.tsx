import * as React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="links">
        <Link to="/">ホーム</Link>
        <Link to="/moments">モーメント</Link>
        <Link to="/notifications">通知</Link>
        <Link to="/#">メッセージ</Link>
      </div>

      <button>ICON</button>

      <input
        className="search-input"
        type="text"
        placeholder="キーワード検索"
      />
      <button>MY ICON</button>
      <button className="tweet-button">Tweet</button>
    </div>
  </header>
);

export default Header;
