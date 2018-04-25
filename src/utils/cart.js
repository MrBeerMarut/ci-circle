import R from 'ramda';
// export const sumaryUnit = (items) => {
//     let obj, sum = 0;
//     for(obj = 0; obj < items.length;obj++){
//         sum += items[obj].unit;
//     }
//     return sum;
// }

const sumUnit = items => items.reduce((sum, item) => sum+item.unit, 0)
export const sumaryUnit = R.pipe(
    sumUnit
)
    
//==============================================================

// export const sumaryPrice = (items) => {
//     let obj, totol = 0;

//     for(obj = 0 ; obj < items.length; obj++){
//         totol += items[obj].unit * items[obj].price;
//     }
//     return totol;
// }

const sumPrice = items => items.map((item) => item.price*item.unit)
const sumAll = sumPrice => sumPrice.reduce((sum, item) => sum+item)
export const sumaryPrice = R.compose(
    sumAll,
    sumPrice
)

//==============================================================

// export const getItemByName = (items,getName) =>{
//     let obj = 0, temp='';

//     while(obj < items.length){
//         if(getName === items[obj].name){
//             temp = obj;
//             obj++;
//         }else{
//             obj++;
//             }
//     }
//     return temp !== '' ? [items[temp]] : 'not found';
// }
const getItem = R.curry((getname,item) => item.name === getname)
export const getItemByName = (items,getname) => {
    const result = R.filter(getItem(getname), items)
    return result.length === 0 ? 'not found':result
}

//==============================================================

// export const sumaryPriceByName = (items,name) =>{
//     let obj=0,sumPrice=0;
    
//     while(obj<items.length){
//         if(items[obj].name === name){
//             sumPrice = items[obj].price * items[obj].unit
//             break;
//         }else{
//             obj++;
//         }
//     }
//     return sumPrice;
// }

// export const sumaryPriceByName = (items,name) =>{
//     let sum = 0;
//      items.map((item,index) => {
//         if(item.name === name){
//          sum = item.price*item.unit;
//         }
//     })
//     return sum
// }

const sumary = R.curry((name, item) => item.name === name)
export const sumaryPriceByName = (items,name) =>{
    let sum = 0;
    const result = R.filter(sumary(name), items)
    R.map(item => sum = item.price*item.unit,result)
    return sum
}

//===========================================================
// export const addItem = (items,newInput) => {
//     let obj,er = 0;
//     ;
//     for(obj = 0 ; obj < items.length ; obj++ ){
//         if(typeof newInput.name !== 'string' || typeof newInput.price !== 'number' || typeof newInput.unit !== 'number'){
//             return 'input error';
//             break;
//         }else if(obj === items.length-1){
//             items[obj+1] = newInput;
//             return items;
//         }
//     }
// }

export const addItem = (items,newInput) => {
    if(typeof newInput.price !== 'number'){
        return 'input error'
    }else{
        items.push(newInput);
        return items
    }
}
// const checkInput = R.curry((obj) => R.filter(item => typeof item.price === 'number'))
// export const addItem = (items,newInput) => {
//     const result = R.filter(checkInput(newInput),newInput)
// }


//=====================================================================
// export const deleteItem = (items,deleteByName) => {
//     let obj,temp;
//     for(obj=0 ; obj < items.length; obj++){
//         if(items[obj].name === deleteByName){
//             items.splice(obj, 1)
//                 break;
//         }
//     }
//    return items
// }

export const deleteItem = (items,deleteByName) => {
    const result = items.filter(item => {
        return item.name !== deleteByName;
    }) 
    return result
}

//=====================================================================

// export const editItemByName = (items,editByName,unitValue) => {
//     let obj;
//     for(obj = 0 ; obj < items.length; obj++){
//         if(items[obj].name === editByName){
//             items[obj].unit = unitValue;
//         }
//     }
//     return items 
// }

export const editItemByName = (items,editByName,unitValue) => {
    const result = items.map(item => {
        return item.name === editByName ? {...item ,unit:unitValue} : item
    })
    return result
}

//=====================================================================
// export const addOneByName = (items,addByName) => {
//     let obj;
//     for(obj = 0 ; obj < items.length; obj++){
//         if(items[obj].name === addByName){
//             items[obj].unit++;
//         }
//     }
//     console.log(items)
//     return items
// }

export const addOneByName = (items,addByName) => {
  const result = items.map(item => {
      return item.name === addByName ? {...item, unit:item.unit+1} : item
  })
  return result
}

