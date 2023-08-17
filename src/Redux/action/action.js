export const ADD=(item)=>{
  // console.log("add is:",item)
  return{
    type:"ADD_CART",
    payload:item,
  }
}
// delete
export const DLTITEM=(item)=>{
  console.log("delete item",item);
  return{
    type:"DLT_ITEM",
    id:item.id,
    colour:item.colour
  }
}
// deleteone 
export const DLTITEMONE=(item)=>{
  // console.log("deleteoneis:",item)
  return{
    type:"DLTITEM_ONE",
    payload:item,
  }
}
//search
export const Search=(item)=>{
  console.log("search is:",item)
return{
  type:"SEARCH_ITEM",
  payload:item,
}
}