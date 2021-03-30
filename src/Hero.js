import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
    const {closeSubmenu} = useGlobalContext()
   
    return ( <section className='hero' onMouseOver={closeSubmenu}>
        <div className='hero-center'>
            <article className='hero-info'>
                <h1>Payments Infrastucture <br /> 
                For The Internet</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button className='btn'> Start Now</button>
            </article>
            <article className='hero-images'>
            <img src={phoneImg} className='phone-img' alt='phone'/>
            </article>
        </div>
    </section>
    )
}

export default Hero