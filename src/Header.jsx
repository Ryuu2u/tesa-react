import React from 'react';
import './header.css';

const Header = () => {
  return (
    <>
      <header className="site-header" role="banner">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-text">
              <div className="site-title">Tesa คาเฟ่</div>
            </div>
          </div>

          <nav className="main-nav" aria-label="เมนูหลัก">
            <a href="#menu">เมนู</a>
            <a href="#about">เกี่ยวกับ</a>
            <a href="#contact">ติดต่อ</a>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;