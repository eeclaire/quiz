/*
 * action types
 */

 export const SELECT_ANSWER = 'SELECT_ANSWER'


/*
 * action creators
 */
export function selectAnswer(index) {
    return { type: SELECT_ANSWER, index}
}
