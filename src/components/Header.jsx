import React from 'react';

function Header() {
  return (
    <>
      <header className="header">
        <ul className="navbar">
          <li><a href="#">Discover</a></li>
          <li><a href="#">My Plants</a></li>
          <li><a href="#">Diseases</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <div className="profile">
          <input className="profile-search" type="text" />
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1864:3)">
              <circle cx="14" cy="14" r="12.6" fill="#F1F2F6" stroke="#E0E7F1" strokeWidth="1.2"/>
              <ellipse cx="14" cy="25.5" rx="11" ry="9.5" fill="#ADB8C8"/>
              <circle cx="14" cy="10" r="4" fill="#ADB8C8"/>
            </g>
            <path
              d="M14 24.8C8.03533 24.8 3.2 19.9647 3.2 14H0.8C0.8 21.2902 6.70984 27.2 14 27.2V24.8ZM24.8 14C24.8 19.9647 19.9647 24.8 14 24.8V27.2C21.2902 27.2 27.2 21.2902 27.2 14H24.8ZM14 3.2C19.9647 3.2 24.8 8.03533 24.8 14H27.2C27.2 6.70984 21.2902 0.8 14 0.8V3.2ZM14 0.8C6.70984 0.8 0.8 6.70984 0.8 14H3.2C3.2 8.03533 8.03533 3.2 14 3.2V0.8Z"
              fill="#C5D1DB"/>
            <defs>
              <clipPath id="clip0_1864:3">
                <path
                  d="M2 14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14Z"
                  fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </header>
    </>
  );
}

export default Header;