import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Clock from '../components/Clock'

const Navbar = () => {
    return (
        <div className="flex flex-row place-items-center">
            <div className='mx-2'>
                <Link href="tictactoe" className='btn btn-rounded bg-primary text-primary-content rounded-md'>Tic-Tac-Toe</Link>
            </div>
            <div className='mx-2'>
                <Link href="ember" className='btn btn-rounded bg-primary text-primary-content rounded-md'>Ember</Link>
            </div>
        </div>
    )
}

export default Navbar