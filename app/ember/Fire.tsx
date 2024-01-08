import React from 'react'
import firebase from './fire.module.scss'
export const Fire = () => { 
    const particles = Array.from({ length: 50 }, (_, index) => index + 1);
  return (
    <div className="relative">
        <div className={`${firebase.flame} ${firebase.fire}`}></div>
        {particles.map((index) => (
                <div key={index} className={`${firebase.particle} z-${index + 1}`}></div>
            ))}
    </div>
 )
}
