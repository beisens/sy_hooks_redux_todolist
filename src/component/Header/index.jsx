import { nanoid } from 'nanoid'
import React from 'react'
import {useDispatch} from 'react-redux'
import { ADD_TODO } from '../../redux/actions/todos'

import './index.css'

export default function Header() {

  const dispatch = useDispatch()

  const handleAdd = (e) => {
    const {target, key} = e
    const todoObj = {id: nanoid(), name: target.value, done: false, isShow: true}
    if(key !== 'Enter') return
    if(target.value.trim() === '') {
      alert('输入不能为空！');
      return
    }
    dispatch(ADD_TODO(todoObj))
    target.value = ''
  }

  return (
    <div className="todo-header">
      <h1 className="title">TodoList</h1>
      <input type="text" onKeyUp={handleAdd} placeholder="请输入您的待办名称，按回车确认" />
    </div>
  )
}