import React from 'react'

export default function Mainpage() {
  return (
    <div className='main_page_container'>
      <nav>
        <div className="logo">
          <img src="" alt="Logo" /> 
          <p>name</p>
        </div>
        <ul className="nav-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="socials">Socials and donations</div>
      <section className="hero">Hero</section>
      <section className="about_us">About info section</section>
      <section className="stories">Stories</section>
      <section className="areas_of_focus">Area de focus</section>
      <section className="take_action_donation">Action donation</section>
      <footer>Footer</footer>
    </div>
  )
}
