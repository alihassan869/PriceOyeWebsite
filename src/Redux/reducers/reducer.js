const INIAL_STATE={
  CARTS:[],
  SEARCH:'',
}
export const Cartreducer=(state=INIAL_STATE,action)=>{
switch (action.type) {
  case "ADD_CART":
    console.log('data is:',action.payload)
    return{
      ...state,
      CARTS:[...state.CARTS,action.payload]
    }
    case "DLT_ITEM":
      const Items=state.CARTS.filter((item)=>item.id !== action.id || item.colour !== action.colour )
    return {
      ...state,
      CARTS:Items
    }
      case "SEARCH_ITEM":
        return {
          ...state,
          SEARCH:action.payload
        }
  default:
    return state;
}
}