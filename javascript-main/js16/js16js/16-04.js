// const id1 = setTimeout(()=>{
//     console.log('5초뒤에 실행됨')
//     },5001)
    
// let count = 0;
// const id2 = setInterval(()=>{
//     count++
//     console.log(`[${count}번째] 1초마다 실행됨`)
//     },1000)

// setTimeout(()=>{
//     clearTimeout(id1)
//     clearInterval(id2)    
//     },8000)

function fn(){
    let ct = 5
    id = setInterval(()=>{
        if(ct>0){
            console.log(`${ct}`);
        }else if(ct==0){
            console.log('펑!');
            alert('펑!')
            clearInterval(id)
        }
            ct--;                
    },1000)
    console.log(`타이머ID(${id})가 동작합니다.`)    
}
function fnx(){
    clearInterval(id)
    console.log(`타이머ID(${id})가 사용자에 의해 중지됨`)
    alert(`중지됨`)
}
>>>>>>> ec2896febcde01a846932288f4c4316b619ab51b
