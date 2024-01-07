import React from 'react'
import styles from './flame.module.scss'
export const Fire = () => { 
    const particles = Array.from({ length: 50 }, (_, index) => index + 1);
  return (
    <div className={`${styles.fire} realative flex flex-col items-center `}>
        <div className="flame scale-90"></div>
        {particles.map((index) => (
                <div key={index} className={`absolute top-5 scale-90 ${styles.particle} z-${index + 1}`}></div>
            ))}
    </div>
 )
}
