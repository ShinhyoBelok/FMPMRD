import React from 'react'
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import './styles/navbar.css';
import './styles/socials.css';
import './styles/hero.css';
import './styles/about-us.css';
import './styles/stories.css';
import './styles/areas-of-focus.css';
import './styles/take-action.css';
import './styles/footer.css';

export default function Mainpage() {
  return (
    <div className='main_page_container'>
      <nav className='flexbox'>
        <div className="logo flexbox">
          <img src="./src/assets/WFWP+International+Logo+7.png" alt="Logo" /> 
          <p>FEDERACIÓN DE MUJERES PARA LA PAZ MUNDIAL <br/><span> REPÚBLICA DOMINICANA</span></p>
        </div>
        <ul className="nav-links flexbox">
          <li><a href="#">QUIÉNES SOMOS</a></li>
          <li><a href="#">PROYECTOS</a></li>
          <li><a href="#">UBICACIÓN</a></li>
          <li><a href="#">CONTACTO</a></li>
        </ul>
      </nav>
      <div className="socials flexbox">
        <div className="icons flexbox">
          <a className="link-icon" href="#"><BsFacebook /></a>
          <a className="link-icon" href="#"><AiFillInstagram /></a>
          <a className="link-icon" href="#"><BsYoutube /></a>
        </div>
        <button className='donate-btn'>DONAR</button>
      </div>
      <section className="hero flexbox">
        <img id='bp1' className='backpic' src="src\assets\backpic1.png" alt="backpic" />
        <MdKeyboardDoubleArrowLeft className='arrows' />
        <div className="content-hero flexbox">
          <div className="pic-description flexbox">
            <h2>12o Red Global de Mujeres Lideres para la Paz</h2>
          </div>
          <img src="src\assets\pic1.jpg" alt="Hero pic" />
        </div>
        <MdKeyboardDoubleArrowRight className='arrows' />
        <img id='bp2' className='backpic' src="src\assets\backpic1rev.png" alt="backpic" />
      </section>
      <section className="about-us flexbox">
        <article className='left-side'>
          <h2>QUIENES SOMOS</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
        <article className='right-side'>
          <h2>ABOUT US</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
        <article className='left-side'>
          <h2>ABOUT US</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
        <article className='right-side'>
          <h2>ABOUT US</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
        <article className='left-side'>
          <h2>QUIENES SOMOS</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
        <article className='right-side'>
          <h2>ABOUT US</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
        <article className='left-side'>
          <h2>ABOUT US</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
        <article className='right-side'>
          <h2>ABOUT US</h2>
          <p>Women working together to realize one global family rooted in a culture of sustainable peace.</p>
        </article>
      </section>
      <section className="stories flexbox">
        <div className="story_pic">
          <img src="src\assets\storie1.jpg" alt="storie pic" />
        </div>
        <div className="story-desc flexbox">
          <h2>SUCCESS STORIES:</h2>
          <p>
            The Girl Child Empowerment Project in WFWP Burkina Faso 
            WFWP Burkina Faso organized a workshop in Lycée Bogodogo 
            with students from the Ouagadougou International School 
            in six different cities and schools. Each workshop was 
            attended by 50 to 250 children.
          </p>
          <button className='read-more-btn'>DETALLES</button>
        </div>
      </section>
      <section className="areas-of-focus flexbox">
        <h2>ÁREAS DE ENFOQUE</h2>
        <div className="areas flexbox">
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
        </div>
      </section>
      <section className="take-action-donation flexbox">
        <img src="src\assets\takeaction.jpg" alt="kid" />
        <div className="action flexbox">
          <h2>TOMAR ACCIÓN</h2>
          <p>
            Learn more about how you can donate or help raise 
            money for children, students and education programs 
            in need of a helping hand.
          </p>
          <button>DONAR</button>
        </div>
      </section>
      <footer className='flexbox'>
        <div className="icons flexbox">
          <a className="link-icon" href="#"><BsFacebook /></a>
          <a className="link-icon" href="#"><AiFillInstagram /></a>
          <a className="link-icon" href="#"><BsYoutube /></a>
        </div>
        <p>COPYRIGHT &copy; FEDERACIÓN DE MUJERES PARA LA PAZ MUNDIAL, TODOS LOS DERECHOS RESERVADOS  |  REP. DOM. SANTO DOMINGO, GAZCUE, C. FELIX MARIANO LLUVERES, # 14</p>
      </footer>
    </div>
  )
}
