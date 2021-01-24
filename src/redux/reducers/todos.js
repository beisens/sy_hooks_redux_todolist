import {ADD_TODO,DELETE_TODO,UPDATE_TODO,CHECKALL_TODO,CLEARALLDONE,SHOWALL_TODO,SHOWDONE_TODO,SHOWNONE_TODO} from '../constant'

const initState = {
  todos: [
    { id: "001", name: "吃饭", done: true, isShow: true },
    { id: "002", name: "睡觉", done: true, isShow: true },
    { id: "003", name: "打代码", done: false, isShow: true },
    { id: "004", name: "逛街", done: false, isShow: true },
  ]
};

export default function todosReducer(state = initState, action) {

  const { todos } = state
  const { type, data } = action
  let newTodos

  switch (type) {
    // 添加一个todo功能
    case ADD_TODO:
      newTodos = [data, ...todos]
      return {todos: newTodos}

    // 更新一个todo对象
    case UPDATE_TODO:
      newTodos = todos.map(todo => {
        if(todo.id === data.id) return {...todo, done: data.done}
        else return todo
      })
      return {todos:newTodos}
       
    // 删除一个todo对象
    case DELETE_TODO:
      newTodos = todos.filter(todo => todo.id !== data.id)
      return {todos: newTodos}
  
    // 全选
    case CHECKALL_TODO:
      newTodos = todos.map(todo => {
        return {...todo, done:data.done}
      })
      return {todos: newTodos}

    // 清除所有已完成的todo对象
    case CLEARALLDONE:
      newTodos = todos.filter(todo => !todo.done)
      return {todos: newTodos}

    // 筛选显示所有的todo对象
    case SHOWALL_TODO:
      newTodos = todos.map(todo => {
        todo.isShow = true
        return todo
      })
      return {todos: newTodos}

    // 筛选显示已完成的todo对象
    case SHOWDONE_TODO:
      newTodos = todos.map(todo => {
        todo.isShow = true
        // if(!todo.done) return {...todo, isShow: false}
        if (!todo.done) {
          todo.isShow = false
        }
        return todo
      })
      return {todos: newTodos}

    // 筛选显示未完成的todo对象
    case SHOWNONE_TODO:
      newTodos = todos.map(todo => {
        todo.isShow = true
        // if(todo.done) return {...todo, isShow: false}
        if (todo.done) {
          todo.isShow = false
        }
        return todo
      })
      return {todos: newTodos}

    default:
      // return state
      return {...state}
  }
}