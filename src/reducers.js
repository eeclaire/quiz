import { combineReducers } from 'redux'
import { SELECT_ANSWER } from './actions'

const initialState = {
  index: null
}

function answers(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch (action.type) {
        case SELECT_ANSWER:
            console.log("current state " + state.index)
            console.log("future state " + action.index)
            return Object.assign({}, action, {
                index: action.index
            })
    }
}


const quizApp = combineReducers({
  answers
})
 
export default quizApp