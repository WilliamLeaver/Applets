'use client'
import React, { useState, useEffect } from 'react'
import './fire.css'

import  FireContainer  from './FireContainer'
import TimeLineContainer from './TimeLineContainer'
import {Inventory, bag} from './Inventory'

interface Game {
    fire: number
    timeline: number
    gameover: boolean
}

let Game: Game = {
    fire: 0,
    timeline: 0,
    gameover: false
}

const page = () => {

    const [fire, setfire] = useState(Game.fire)
    const [timeline, setTimeline] = useState(Game.timeline)
    const [gameover, setGameOver] = useState(Game.gameover)

    const addfire = () => {
        if (Game.fire < 100) {
            if (Game.timeline < 60) {
                Game.fire++
            }
            else if (bag.wood > 0) {
                Game.fire++
                bag.wood--
            }
        }
        setfire(Game.fire)
    }

    const NewGame = () => {
        Game.timeline = 0
        Game.gameover = false
        setTimeline(Game.timeline)
        setGameOver(Game.gameover)
    }

    // Timer for the game
    let clock = 500; // in ms
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (Game.timeline > 30 && Game.fire == 0) {
                Game.gameover = true
                setGameOver(Game.gameover)
            }
            if (Game.fire > 0) {
                Game.fire--
                Game.timeline++
            }
            // Update the dropping value with a decreasing amount
            setfire(Game.fire);
            setTimeline(Game.timeline);
        }, clock);

        // Cleanup
        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <div className='my-2 w-full h-screen flex flex-col justify-center bg-black rounded-lg items-center'>
            <FireContainer fire={fire} />
            <div>
            {gameover === false ? (
            <div onClick={addfire} className='btn bg-gradient-radial text-3xl w-max h-max p-2 bg-black rounded-lg flex items-center justify-center'>
                Stoke
            </div>
            ) : (
            <div onClick={NewGame} className='btn bg-gradient-radial text-3xl w-max h-max p-2 bg-black rounded-lg flex items-center justify-center'>
                New Game     
            </div>
            )}
            {}
            </div>
            {timeline < 10 ? null : (
            <div>You have survived {timeline} hours</div>)}
            <TimeLineContainer timeline={timeline}/>
            {timeline > 2 ? (<Inventory/>) : null}
            
        </div>
    )
}

export default page