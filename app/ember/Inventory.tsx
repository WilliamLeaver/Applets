import React from 'react'

interface inventory {
    busy: boolean
    wood: number
}

let bag : inventory = {
    busy: false,
    wood: 40
}

const gatherWood = () => {
  if (bag.busy == false) {
        bag.busy = true
        setTimeout(() => {
            bag.wood += Math.floor(Math.random() * (10 - 2 + 1)) + 2
            bag.busy = false
        }, 5000)
    }
}
const Inventory = () => {
   
  return (
    <div className="w-1/2 p-2 my-2 border-2 rounded-lg">
        <h1 className='font-extrabold text-lg text-center border-b border-dotted'>Inventory</h1>
        <div className='my-2 flex flex-row justify-around place-items-center '>
            <div className='basis-1/2 text-center'>Wood: {bag.wood}</div>
            {bag.busy? <div className='basis-1/2 btn border-black bg-black hover:bg-black hover:cursor-default'><p className='animate-spin'>.</p></div> : <button onClick={gatherWood} className="basis-1/2 btn border-black bg-black rounded-lg hover:shadow-sm hover:shadow-gray-600">Gather Wood</button>}
        </div>
    </div>
  )
}

export {Inventory, bag}