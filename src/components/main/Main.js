import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_ITEM } from '../../redux/action'
import './Main.css'

const Main = () => {

    const store = useSelector((state)=>state)
    const dispatch = useDispatch()

    const handlechg = (id) => {
        dispatch(ADD_ITEM,id)
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