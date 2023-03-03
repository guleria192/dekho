import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_ITEM, REMOVE_ITEM } from '../../redux/action'
import './Main.css'

const Main = () => {

    const store = useSelector((state)=>state)
    const dispatch = useDispatch()

    const handlechg = (id) => {
        
        dispatch({type: ADD_ITEM, id: id})
    }

    const handlechg1 = (id) => {
        
      dispatch({type: REMOVE_ITEM, id: id})
  }

  return (
    <div className='box1'>
      {
      store.list.map((val)=>{
     return (
        
        <div className='box'>
        <div>{val.title}</div>
        <div>{val.discription}</div>
        <button onClick={() => {handlechg(val.id)}}>add</button>
        <button onClick={() => {handlechg1(val.id)}}>remove</button>
         </div>
         
     )
      
      })
      }
    </div>
  )
}

export default Main



// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/guleria192/dekho.git
// git push -u origin main