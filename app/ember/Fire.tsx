import React from 'react'
import flames from './flame.module.scss'
import firebase from './fire.module.scss'
export const Fire = () => { 
    const particles = Array.from({ length: 50 }, (_, index) => index + 1);
  return (
    <div className={`${flames.fire} realative flex flex-col items-center`}>
        <div className={`${firebase.flame} scale-90`}></div>
        {particles.map((index) => (
                <div key={index} className={`absolute top-5 scale-90 ${flames.particle} z-${index + 1}`}></div>
            ))}
    </div>
 )
}
