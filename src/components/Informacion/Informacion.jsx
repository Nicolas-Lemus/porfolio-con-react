import React from 'react'
import Precentacion from '../../images/informacion.png'
import './Informacion.css'


export const Informacion = () => {
  return (
    <>
      <section>
        <div className='informacion__title'> 
          <h2>Sobre mi<span className='animate__animated animate__flash'>.</span><span className='animate__animated animate__flash2'>.</span><span className='animate__animated animate__flash3'>.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi consequuntur tempora illum unde eos. Id nesciunt quibusdam laboriosam doloremque reiciendis. Eaque distinctio nostrum temporibus, deleniti ipsam ullam iste quas! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit delectus, cum commodi accusantium magni provident id, iste voluptatem expedita quis atque, sapiente libero eius beatae nobis maxime doloremque. Modi.</p>
        </div>
        <div className='informacion'>
          <img src={Precentacion} alt="imagen-de-precentacion" />
        </div>
      </section>
    </>
  )
}
