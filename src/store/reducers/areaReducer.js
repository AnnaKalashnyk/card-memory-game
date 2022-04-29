import {FLIP, FLIP_OUT, START_GAME} from '../actions/actionType';

const superHero = [
    {value: 'sailor-moon', isFlipped: true},
    {value: 'sailor-mercury', isFlipped: true},
    {value: 'sailor-venus', isFlipped: true},
    {value: 'sailor-mars', isFlipped: true},
    {value: 'sailor-jupiter', isFlipped: true},
    {value: 'sailor-saturn', isFlipped: true},
    {value: 'sailor-neptun', isFlipped: true},
    {value: 'sailor-uranus', isFlipped: true}
]

const initialState = {
    cards: [...superHero, ...superHero].map((item, i) =>{
        return {...item, index: i}
    })
}

export const size = initialState.cards.length

export default function areaReducer(state = initialState, action) {
    switch(action.type) {
        case FLIP:
            return {
                ...state,
                cards: action.payload
            }
        case FLIP_OUT:
            return {
                ...state,
                cards: action.payload
            }
        case START_GAME:
            return {
                ...state,
                cards: action.payload
            }
        default:
            return state
    }
}
