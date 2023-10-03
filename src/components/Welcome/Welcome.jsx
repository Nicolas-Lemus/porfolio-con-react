import React from 'react'
import './Welcome.css'
import Perfil from '../../images/FOTO-PERFILsinfondo.png'
import instagram from '../../images/social/instagram.png'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
const Welcome = () => {

  return (
    <div className='div'>
      <section className='welcome'>
        <h2>Bienvenid@s</h2>
        <h3>Soy Nicolas Lemus...</h3>
        <h4>Front-End <span>Developers</span></h4>
        <h5>🟢Desarrollo Web🟢 HTML5 CSS3 JAVASCRIPT REACT JS</h5>
        <section className='welcome__social'>
          <a href="https://www.instagram.com/nicolaslemuscurbelo/"><img src={instagram} alt="Instagram" /></a>
          <a href="https://www.linkedin.com/in/nicolas-lemus-119761265/"><img src={linkedin} alt="Linkedin" /></a>
          <a href="https://github.com/Nicolas-Lemus"><img src={github} alt="GitHub" /></a>
        </section>
      </section>
      <section className='welcome__perfil'>
          <img src={Perfil} alt="Foto-perfil" />
      </section>
    </div>
  )
}

export default Welcome  