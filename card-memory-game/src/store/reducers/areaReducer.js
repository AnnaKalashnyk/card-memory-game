const superHero = [
    {value: 'sailor-moon', isFlipped: false},
    {value: 'sailor-mercury', isFlipped: false},
    {value: 'sailor-venus', isFlipped: false},
    {value: 'sailor-mars', isFlipped: false},
    {value: 'sailor-jupiter', isFlipped: false},
    {value: 'sailor-saturn', isFlipped: false},
    {value: 'sailor-neptun', isFlipped: false},
    {value: 'sailor-uranus', isFlipped: false}
]

const initialState = {
    cards: [...superHero, ...superHero]
}

export default function areaReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}
