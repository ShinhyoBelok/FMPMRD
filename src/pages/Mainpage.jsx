import React from 'react'
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

export default function Mainpage() {
  return (
    <div className='main_page_container'>
      <nav>
        <div className="logo">
          <img src="./src/assets/WFWP+International+Logo+7.png" alt="Logo" /> 
          <p>Federación de mujeres para la paz mundial</p>
        </div>
        <ul className="nav-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="socials">
        <div className="icons">
          <BsFacebook />
          <AiFillInstagram />
          <BsYoutube />
        </div>
        <button>Donate</button>
      </div>
      <section className="hero">
        <img src="src\assets\hero1.jpg" alt="Hero pic" />
      </section>
      <section className="about_us">
        <article>
          <img src="src\assets\boxesimg-about-us.jpg" alt="picture of smiling girl" />
          <h2>ABOUT US</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
        <article>
          <img src="src\assets\boxesimg-about-us.jpg" alt="picture of smiling girl" />
          <h2>WHAT WE DO</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
        <article>
          <img src="src\assets\boxesimg-about-us.jpg" alt="picture of smiling girl" />
          <h2>UPCOMING EVENTS</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
        <article>
          <img src="src\assets\boxesimg-about-us.jpg" alt="picture of smiling girl" />
          <h2>UNITED NATIONS OFFICES</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
      </section>
      <section className="stories">
        <div className="story_pic">
          <img src="src\assets\storie1.jpg" alt="storie pic" />
        </div>
        <div className="story_desc">
          <h2>SUCCESS STORIES:</h2>
          <p>
            The Girl Child Empowerment Project in WFWP Burkina Faso 
            WFWP Burkina Faso organized a workshop in Lycée Bogodogo 
            with students from the Ouagadougou International School 
            in six different cities and schools. Each workshop was 
            attended by 50 to 250 children.
          </p>
          <button>READ MORE</button>
        </div>
      </section>
      <section className="areas_of_focus">
        <div className="focus">
          <img src="src\assets\areaoffocus1.png" alt="world" />
          <h4>PROYECTOS HUMANITARIOS</h4>
        </div>
        <div className="focus">
          <img src="src\assets\areaoffocus1.png" alt="world" />
          <h4>PROYECTOS HUMANITARIOS</h4>
        </div>
        <div className="focus">
          <img src="src\assets\areaoffocus1.png" alt="world" />
          <h4>PROYECTOS HUMANITARIOS</h4>
        </div>
        <div className="focus">
          <img src="src\assets\areaoffocus1.png" alt="world" />
          <h4>PROYECTOS HUMANITARIOS</h4>
        </div>
        <div className="focus">
          <img src="src\assets\areaoffocus1.png" alt="world" />
          <h4>PROYECTOS HUMANITARIOS</h4>
        </div>
        <div className="focus">
          <img src="src\assets\areaoffocus1.png" alt="world" />
          <h4>PROYECTOS HUMANITARIOS</h4>
        </div>
      </section>
      <section className="take_action_donation">
        <img src="src\assets\takeaction.jpg" alt="kid" />
        <div className="action">
          <h3>TOMAR ACCIÓN</h3>
          <p>
            Learn more about how you can donate or help raise 
            money for children, students and education programs 
            in need of a helping hand.
          </p>
          <button>DONAR</button>
        </div>
      </section>
      <footer>
        <div className="icons">
          <BsFacebook />
          <AiFillInstagram />
          <BsYoutube />
        </div>
        <p>COPYRIGHT &copy; WOMEN'S FEDERATION FOR WORLD PEACE, INTERNATIONAL - ALL RIGHTS RESERVED  |  4 W 43RD STREET, NEW WORK, NY 10036, USA</p>
      </footer>
    </div>
  )
}
