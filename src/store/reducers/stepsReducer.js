import {RESET_STEPS, STEP_INC} from '../actions/actionType';

const initialState = {
    steps: 0
}
export default function stepsReducer(state = initialState, action) {
    switch(action.type) {
        case STEP_INC:
            return {
                ...state,
                steps: action.payload
            }
        case RESET_STEPS:
            return {
                ...state,
                steps: initialState.steps
            }
        default:
            return state
    }
}
