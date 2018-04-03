import * as React from 'react';
import './Sidebar.css';

const Sidebar = (props: any) => (
  <div>
    <div className="user-profile">
      <img src="#" className="header-img" />
      <img src="#" className="icon" />

      <div className="user-field">seya</div>

      <ul>
        <li>
          <span>ツイート</span>
          <span>725</span>
        </li>
        <li>
          <span>フォロー</span>
          <span>725</span>
        </li>
        <li>
          <span>フォロワー</span>
          <span>725</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
