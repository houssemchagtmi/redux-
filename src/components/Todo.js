import React from "react"
import {  Button } from 'react-bootstrap'
import EditTodo from "./EditTodo"
import {deleteTask} from '../redux/actions/todoActions'
import { useDispatch } from 'react-redux'
import './TodoCss.css'
const Todo = ({ el }) => {
  const dispatch = useDispatch()
  return (
    <div className="neo" style={{ display: "flex",justifyContent:"space-between", flexDirection:'row', marginBottom:"25px",marginLeft:"25px",width:'500px'}}>
      <h2> {el.text} </h2>
      <div style={{display:'flex' }}>
      <EditTodo el={el} />
        <Button variant="primary" onClick={()=>dispatch(deleteTask(el.id))}>
            delete
        </Button>
      </div>
       

      
  </div>
  )
}

export default Todo
