import React,{Fragment,useState} from 'react'
import { useDispatch } from 'react-redux'
import { DELETE_TODO, UPDATE_TODO } from '../../redux/actions/todos'

import './index.css'

export default function Item(props) {

    const dispatch = useDispatch()
    const [mouse, setMouse] = useState(false)
    const {id,name,done,isShow} = props

    // 控制鼠标移入移出的样式变化
    const handleMouse = (flag) => {
        setMouse(flag)
    }

    // 更新状态
    const handleUpdate = (id,e) => {
        dispatch(UPDATE_TODO({id, done:e.target.checked}))
    }
    
    return (
        <Fragment>
            {isShow && <li style={{background: mouse ? '#ddd' : '#fff'}} onMouseEnter={()=>handleMouse(true)} onMouseLeave={()=>handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={(e) => handleUpdate(id,e)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => dispatch(DELETE_TODO({id}))} style={{display: mouse ? 'block' : 'none'}} className="btn btn-danger">删除</button>
            </li>}
        </Fragment>
    )
}
