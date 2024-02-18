import React from 'react'
import { Fire } from './Fire'

type FireContainerProps = { fire: number };

// TODO: Look into optimization of the code below.
const FireContainer: React.FC<FireContainerProps> = ({fire}) => {
    const checkLevel = (fire:number) => {
        if (fire < 5) {
            return <div className='h-52 scale-0'><Fire /></div>;
        }
        else if (fire >= 5 && fire < 10) {
            return <div className='h-52 scale-5'><Fire /></div>
        }  
        else if (fire >= 10 && fire < 15) {
            return <div className='h-52 scale-10'><Fire /></div>
        } 
        else if (fire >= 15 && fire < 20) {
            return <div className='h-52 scale-15'><Fire /></div>
        } 
        else if (fire >= 20 && fire < 25) {
            return <div className='h-52 scale-20'><Fire /></div>
        } 
        else if (fire >= 25 && fire < 30) {
            return <div className='h-52 scale-25'><Fire /></div>
        } 
        else if (fire >= 30 && fire < 35) {
            return <div className='h-52 scale-30'><Fire /></div>
        } 
        else if (fire >= 35 && fire < 40) {
            return <div className='h-52 scale-35'><Fire /></div>
        } 
        else if (fire >= 40 && fire < 45) {
            return <div className='h-52 scale-40'><Fire /></div>
        } 
        else if (fire >= 45 && fire < 50) {
            return <div className='h-52 scale-45'><Fire /></div>
        } 
        else if (fire >= 50 && fire < 55) {
            return <div className='h-52 scale-50'><Fire /></div>
        } 
        else if (fire >= 55 && fire < 60) {
            return <div className='h-52 scale-55'><Fire /></div>
        } 
        else if (fire >= 60 && fire < 65) {
            return <div className='h-52 scale-60'><Fire /></div>
        } 
        else if (fire >= 65 && fire < 70) {
            return <div className='h-52 scale-65'><Fire /></div>
        } 
        else if (fire >= 70 && fire < 75) {
            return <div className='h-52 scale-70'><Fire /></div>
        } 
        else if (fire >= 75 && fire < 80) {
            return <div className='h-52 scale-75'><Fire /></div>
        } 
        else if (fire >= 80 && fire < 85) {
            return <div className='h-52 scale-80'><Fire /></div>
        } 
        else if (fire >= 85 && fire < 90) {
            return <div className='h-52 scale-85'><Fire /></div>
        } 
        else if (fire >= 90 && fire < 95) {
            return <div className='h-52 scale-90'><Fire /></div>
        } 
        else if (fire >= 95 && fire < 100) {
            return <div className='h-52 scale-95'><Fire /></div>
        } 
        else {
            return <div className='h-52 scale-100'><Fire /></div>
        }    
    }
  return (
    checkLevel(fire)
  )
}

export default FireContainer