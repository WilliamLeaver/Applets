import React from 'react'

interface inventory {
    busy: boolean
    wood: number
}

let bag : inventory = {
    busy: false,
    wood: 40
}

const Inventory = () => {
    const GatherWood = () => {
        
    }
  return (
    <div className="w-1/5 p-2 my-2 border-2 rounded-lg">
        <h1 className='font-extrabold text-lg text-center border-b border-dotted'>Inventory</h1>
        <div className='my-2 flex flex-row justify-around place-items-center '>
            <div>Wood: {bag.wood}</div>
            <button className="btn bg-black rounded-lg">Gather Wood</button>
        </div>
    </div>
  )
}

export {Inventory, bag}