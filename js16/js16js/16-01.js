// 어레이의 평균을 구하라.
// reduce() 를 사용할것


// let sum =0
// const arr = Array(10).fill(0).reduce((a,c,i,ar)=>{
//     ar[i] = i+1;
//     return ar
// },0)
// console.log(arr)
// reduce(function(accumulator, currentValue, currentIndex, array)

const arr = [4,2,5,1,3,6]
const arr_rt = arr.reduce((a,c,i,ar)=>{
    avg = a + c 
    if (i==ar.length-1){return avg/ar.length}
    return avg
},0)
console.log(arr_rt)



// const arr_rt = arr.reduce((a,c,i,ar)=>{       
//     sum = (a+c)
//     console.log(sum)
//     if(i==ar.length-1){return sum/ar.length}        
//     return sum
// }, 0)
// console.log(arr_rt)
