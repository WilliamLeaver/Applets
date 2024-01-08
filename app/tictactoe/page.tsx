'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

interface Game { 
    scoreX: number;
    scoreO: number;
    board: Array<number>;
    win: boolean;
    turn: boolean;
}

let Game: Game = {
    scoreX: 0,
    scoreO: 0,
    board: [0, 0, 0,
            0, 0, 0,
            0, 0, 0],
    win: false,
    turn: true
}


const Page = () => {

    const [scoreX, setScoreX] = useState(Game.scoreX)
    const [scoreO, setScoreO] = useState(Game.scoreO)
    const [board, setBoard] = useState(Game.board)
    const [win, setWin] = useState(Game.win)
    const [turn, setTurn] = useState(Game.turn)

    const NewGame = () => {
        Game.board = [0, 0, 0,
                      0, 0, 0,
                      0, 0, 0]
        Game.win = false
        setBoard(Game.board)
        setWin(Game.win)
    }
    const UpdateBoard = (index: number) => {
        if (Game.board[index] === 0 && Game.win === false) {
            if (Game.turn == true) {
                Game.board[index] = 1;
                Game.turn = false;
            }
            else {
                Game.board[index] = 2;
                Game.turn = true
            }
            CheckWin();
            setTurn(Game.turn)
            setBoard([...Game.board])
        
        }    

        
    }
    const CheckWin = () => {
        if (!(Game.board.includes(0))) {
            console.log("GG no re")
        }
        if (Game.board[0] != 0 && Game.board[0] === Game.board[1] && Game.board[1] === Game.board[2] || 
            Game.board[3] != 0 && Game.board[3] === Game.board[4] && Game.board[4] === Game.board[5] ||
            Game.board[6] != 0 && Game.board[6] === Game.board[7] && Game.board[7] === Game.board[8] ||
            Game.board[0] != 0 && Game.board[0] === Game.board[3] && Game.board[3] === Game.board[6] ||
            Game.board[1] != 0 && Game.board[1] === Game.board[4] && Game.board[4] === Game.board[7] ||
            Game.board[2] != 0 && Game.board[2] === Game.board[5] && Game.board[5] === Game.board[8] ||
            Game.board[0] != 0 && Game.board[0] === Game.board[4] && Game.board[4] === Game.board[8] ||
            Game.board[6] != 0 && Game.board[6] === Game.board[4] && Game.board[4] === Game.board[2]) {
                Game.win = true
                setWin(Game.win)
                if (Game.turn === true) {
                    Game.scoreO++
                    setScoreO(Game.scoreO)
                }
                else {
                    Game.scoreX++
                    setScoreX(Game.scoreX)
                }
            }
    }
    return (
        <div className='my-2 flex flex-col items-center p-2 bg-neutral rounded-lg'>
            <div className='my-2 w-full sm:w-1/2 flex flex-row justify-evenly text-primary-content place-items-center'>
                <button type="button" onClick={NewGame} className="btn bg-primary rounded-md w-1/3">New Game</button>
                <div className='text-lg font-bold w-1/3 text-center'>
                    {turn == true ? ("X's turn") : ("O's turn")}
                </div>
                <div className="w-1/3 text-center font-bold text-2xl sm:text-lg place-items-center">X wins: {scoreX} | O wins: {scoreO}</div>
            </div>
            {win == true ? (
            <div className='md:w-1/4 mb-2 text-center font-bold text-xl text-primary-content rounded-md'>
                Winner Winner Chicken Dinner
            </div> ) : null}
            <div className='grid grid-cols-3 gap-2 w-full md:w-1/2 '>
                    {board.map((content, index) => (
                        <button key={index} onClick={() => UpdateBoard(index)} className="btn bg-primary text-primary-content rounded-md w-full">{content == 1 ? ("X") : content == 2 ? ("O") : null}</button>  
                    ))}
            </div>
        </div>
    )
}



export default Page