import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { CHECKALL_TODO, CLEARALLDONE, SHOWALL_TODO, SHOWDONE_TODO, SHOWNONE_TODO } from '../../redux/actions/todos'

import './index.css'

export default function Footer() {

  const dispatch = useDispatch()
  const {todos} = useSelector(state => state)
  // 已完成的数量
  const doneCount = todos.filter(todo => todo.done).length

  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" checked={doneCount === todos.length && todos.length !== 0} onChange={e => dispatch(CHECKALL_TODO({done:e.target.checked}))} />
        </label>
        <span>
          <span> 已完成{doneCount} </span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={() => dispatch(CLEARALLDONE())}> 清除已完成任务</button>
        <button className="btn btn-alive" onClick={() => dispatch(SHOWNONE_TODO())}> 未完成 </button>
        <button className="btn btn-done" onClick={() => dispatch(SHOWDONE_TODO())}> 已完成 </button>
        <button className="btn btn-all" onClick={() => dispatch(SHOWALL_TODO())}> 全部 </button>
    </div>
  );
}