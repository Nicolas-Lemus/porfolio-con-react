import React from 'react'
import './Proyectos.css'
import Desarrollo1 from '../../images/Desarrollo-web-1.webp'
import Desarrollo2 from '../../images/Desarrollo-web-2.webp'
import Desarrollo3 from '../../images/Desarrollo-web-3.webp'
import JavaScript1 from '../../images/JavaScript-1.webp'
import JavaScript2 from '../../images/JavaScript-2.webp'
import JavaScript3 from '../../images/JavaScript-3.webp'
import React1 from '../../images/React-1.webp'
import React2 from '../../images/React-2.webp'
import React3 from '../../images/React-3.webp'


const Proyectos = () => {
  return (
    <>
        <div className='proyectos'>
            <h2>Proyectos<span className='animate__animated animate__flash'>.</span><span className='animate__animated animate__flash2'>.</span><span className='animate__animated animate__flash3'>.</span></h2>
        </div>
        <section className='proyectos__description'>
            <h3>Desarrollo Web</h3>
            <div className='proyectos__images'>
                <img src={Desarrollo1} alt="Proyecto-desarrollo-web"/>
                <img src={Desarrollo2} alt="Proyecto-desarrollo-web"/>
                <img src={Desarrollo3} alt="Proyecto-desarrollo-web"/>
            </div>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, eius hic magnam vero fugiat ipsa. Sunt quam assumenda placeat fugit illo ducimus voluptatibus harum suscipit minima tenetur. Perspiciatis, eos magni?</p>
            <button className='boton'><a href="#">Visitar</a></button>
        </section>
        <div className='cep'></div>
        <section className='proyectos__description'>
            <h3>JavaScript</h3>
            <div className='proyectos__images'>
                <img src={JavaScript1} alt="Proyecto-JavaScript-1"/>
                <img src={JavaScript2} alt="Proyecto-JavaScript-2"/>
                <img src={JavaScript3} alt="Proyecto-JavaScript-3"/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusamus, ad possimus eveniet velit dicta distinctio eius qui sapiente eligendi nobis asperiores, debitis mollitia delectus, obcaecati nostrum officia? Ratione, voluptatem.</p>
            <button className='boton'><a href="#">Visitar</a></button>
        </section>
        <div className='cep'></div>
        <section className='proyectos__description'>
            <h3>React Js</h3>
            <div className='proyectos__images'>
                <img src={React1} alt="Proyecto-ReactJs-1" />
                <img src={React2} alt="Proyecto-ReactJs-2" />
                <img src={React3} alt="Proyecto-ReactJs-3"/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia distinctio aliquid delectus repellat, dolore et, illo dolores reiciendis ipsam eos ea? Aliquid odio velit cumque cum fuga rem facilis vero.</p>
            <button className='boton'><a href="#">Visitar</a></button>
            <div className='cep'></div>
        </section>
    </>
  )
}

export default Proyectos
