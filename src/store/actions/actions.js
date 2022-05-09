import {FLIP, FLIP_OUT, RESET_STEPS, START_GAME, STEP_INC} from './actionType';

export function flip(arr, card) {
    let payload = arr.map(item => {
        if (item === card) {
            item.isFlipped = true
        }
        return item
    })
    return {
        type: FLIP,
        payload
    }
}

export function flipOut(card, arr) {
    let payload = arr.map(item => {
        if (item.index === card.index) {
            item.isFlipped = false
        }
        return item
    })
    return {
        type: FLIP_OUT,
        payload
    }
}

export function startGame(arr) {
    let payload = shuffleCards(arr.map(item => {
        item.isFlipped = false
        return item
    }))
    return {
        type: START_GAME,
        payload
    }
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
export function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        swap(array, currentIndex, randomIndex)
    }
    return array;
}

export const stepInc = (steps) => {
    let payload = steps + 1
    return {
        type: STEP_INC,
        payload
    }
}

export const resetSteps = () => {
    return {
        type: RESET_STEPS
    }
}
