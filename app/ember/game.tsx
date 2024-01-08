

interface Game {
    fire: number
    timeline: number
    gameover: boolean
}

interface inventory {
    busy: boolean
    wood: number
}

let game: Game = {
    fire: 0,
    timeline: 0,
    gameover: false
}


let bag : inventory = {
    busy: false,
    wood: 40
}
export {game, bag}
