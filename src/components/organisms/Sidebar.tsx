import * as React from 'react';
import './Sidebar.css';

const Sidebar = (props: any) => (
  <div className="sidebar">
    <div className="user-profile">
      <img src="#" className="header-img" />
      <img src="#" className="icon" />

      <div className="user-field">seya</div>

      <ul className="profile-stats">
        <li>
          <span className="profile-stats-title">ツイート</span>
          <span className="profile-stats-value">725</span>
        </li>
        <li>
          <span className="profile-stats-title">フォロー</span>
          <span className="profile-stats-value">725</span>
        </li>
        <li>
          <span className="profile-stats-title">フォロワー</span>
          <span className="profile-stats-value">725</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
