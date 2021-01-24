import {createStore} from 'redux'   // ***
import todosReducer from './reducers/todos'

export default createStore(todosReducer)