import {createStore} from 'redux'
import { reducer } from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const  INITIAL_STATE = {

    cart : [],
    list : [

   { id: 1 ,
    title: "hello ji kya haal hello" ,
    quantity : 10 ,
    discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, numquam!"},

    {id: 2 ,
    title: "hello ji kya haal hello" ,
    quantity : 10 ,
    discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, numquam!"},

   { id: 3 ,
    title: "hello ji kya haal hello" ,
    quantity : 10 ,
    discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, numquam!"},

   { id: 4 ,
    title: "hello ji kya haal hello" ,
    quantity : 10 ,
    discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, numquam!"}


    ]

}

export const Duukan = createStore(reducer,INITIAL_STATE,composeWithDevTools)