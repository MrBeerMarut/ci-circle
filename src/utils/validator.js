import R from 'ramda';
export const isEven = num => num % 2 === 0;

//=======================================================
export const isOdd = num => num % 2 !== 0;

//=======================================================
const result = items => R.filter((item) => isEven(item), items)
const result2 = result => result.length > 0 ? true : false
export const isHasEven = R.pipe(
    result,
    result2
)



//======================================================

// export const isHasOdd = (items) => {
//     let temp = 0;
//     for (let index = 0; index < items.length; index++){
//         if(items[index] %2 !== 0){
//             temp = 1;
//         }else{
//             continue;
//         }
//     }
//   return temp === 1 ? true : false;
// }
const re = items => R.filter(item => isOdd(item), items)
const ans = re => re.length > 0 ? true : false
export const isHasOdd = R.compose(
    ans,
    re
)

//========================================================
// export const isAllNumber = (items) => {
//     const result = items.filter(item => { 
//         return typeof item === 'number'
//     })
//     return result.length === items.length
// }
const isNum = R.curry((item) => typeof item === 'number')
export const isAllNumber = (items) => {
    const result = R.filter(item => isNum(item), items)
    return result.length === items.length
}


