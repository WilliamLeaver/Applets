'use client'
import React, { useState, useEffect } from 'react'
import FireContainer from './FireContainer'
import TimeLineContainer from './TimeLineContainer'
import { Inventory, bag } from './Inventory'

interface Game {
    fire: number
    timeline: number
    gameover: boolean
}

let game: Game = {
    fire: 0,
    timeline: 0,
    gameover: false
}

const Page = () => {

    const [fire, setfire] = useState(game.fire)
    const [timeline, setTimeline] = useState(game.timeline)
    const [gameover, setGameOver] = useState(game.gameover)

    const addfire = () => {
        if (game.fire < 100) {
            if (game.timeline < 60) {
                game.fire++
            }
            else if (bag.wood > 0) {
                game.fire++
                bag.wood--
            }
        }
        setfire(game.fire)
    }

    const NewGame = () => {
        game.timeline = 0
        game.gameover = false
        setTimeline(game.timeline)
        setGameOver(game.gameover)
    }

    // Timer for the game
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (game.timeline > 30 && game.fire == 0) {
                game.gameover = true
                setGameOver(game.gameover)
            }
            if (game.fire > 0) {
                game.fire--
                game.timeline++
            }
            // Update the dropping value with a decreasing amount
            setfire(game.fire);
            setTimeline(game.timeline);
        }, 2000);// clock speed in ms

        // Cleanup
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='my-2 w-full h-screen flex flex-col lg:flex-row justify-center bg-black rounded-lg items-center'>
            <div className='lg:w-1/3 flex flex-col justify-center items-center'>
                fire lvl: {game.fire}
                timeline: {game.timeline}
                gameover?: {game.gameover}
            </div>
            <div className='lg:w-1/3 flex flex-col justify-center items-center'>
            <FireContainer fire={fire} />
            <div className='my-2 pt-5'>
                {gameover === false ? (
                    <div onClick={addfire} className='btn bg-gradient-radial text-3xl w-max h-max p-2 bg-black rounded-lg flex items-center justify-center'>
                        Stoke
                    </div>
                ) : (
                    <div onClick={NewGame} className='btn bg-gradient-radial text-3xl w-max h-max p-2 bg-black rounded-lg flex items-center justify-center'>
                        New Game
                    </div>
                )}
                
            </div>
            {timeline < 10 ? null : (
                <div>You have survived {timeline} hours</div>)}
            </div>
            <div className='lg:w-1/3 flex flex-col justify-center items-center'>
            
            <TimeLineContainer timeline={timeline} />
            {timeline >= 60 ? (<Inventory />) : null}
            </div>

        </div>
    )
}

export default Page