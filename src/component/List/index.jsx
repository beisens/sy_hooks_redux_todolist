import React from 'react'
import {useSelector} from 'react-redux'
import Item from '../Item'

import './index.css'

export default function List() {

  const {todos} = useSelector(state => state)

  return (
    <ul className="todo-main">
      {todos.map(todo => <Item key={todo.id} {...todo} />)}
    </ul>
  );
}