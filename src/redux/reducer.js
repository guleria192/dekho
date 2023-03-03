import { ADD_ITEM } from "./action"



export const reducer = (state,action) => {
    let newList = [] ;
     let getCart 
switch (action.type) {
    
    case ADD_ITEM :  
      
         const idAdd = action.id;
         newList = state.list.filter((okji)=>{
             if(okji.id === idAdd){
                 okji.quantity = parseInt(okji.quantity) - 1
                 getCart = {...okji} 
            }
            return okji
         })

        delete getCart.quantity
        getCart.no = 1

        return {...state ,
             list : {...newList}  ,
              cart : {...state.cart,getCart} 
            }        
       

    default:
        return state
}


}