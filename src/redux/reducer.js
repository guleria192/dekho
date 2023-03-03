import { ADD_ITEM, REMOVE_ITEM } from "./action"



export const reducer = (state,action) => {
    let newList = [] ;
     let getCart 
     let updateCart = [] ;
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
       
            
     case REMOVE_ITEM : 
     
     const idRemove = action.id;
        updateCart = state.cart.filter((val)=>{
           
            if(val.id !== idRemove) return val
            else getCart = {...val}

          
        })


        newList = state.list.map((val)=>{

            if(val.id === getCart) {
                  val.quantity = val.quantity + getCart.quantity 
            }

            return val
        })


        

        return {...state,
        list : {...newList} ,
        cart : {...updateCart}
    }


    default:
        return state
}


}