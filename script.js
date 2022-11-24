const onSolve=()=>{
    let num1=document.getElementById('number1').value;
    let num2=document.getElementById('number2').value;
    let result=parseInt(num1)+parseInt(num2)

    document.getElementById('res').innerHTML=result
}

const onSolve2=()=>{
    let num1=document.getElementById('number1-2').value;
    let num2=document.getElementById('number2-2').value;
    let result=parseInt(num1)-parseInt(num2)

    document.getElementById('res2').innerHTML=result
}

const onSolve3=()=>{
    let num1=document.getElementById('number1-3').value;
    let num2=document.getElementById('number2-3').value;
    let result=parseInt(num1)*parseInt(num2)

    document.getElementById('res3').innerHTML=result
}

const onSolve4=()=>{
    let num1=document.getElementById('number1-4').value;
    let num2=document.getElementById('number2-4').value;
    let result=parseInt(num1)/parseInt(num2)

    document.getElementById('res4').innerHTML=result
}





// const onSolve=()=>{
//     let num1=document.getElementById('number1').value;
//     let num2=document.getElementById('number2').value;
//     let symbol=document.getElementById('symbol').value;
//     let result=parseInt(num1).parseInt(symbol['+','-']).parseInt(num2)


//     document.getElementById('answer').innerHTML=result
// }

// let symbol={
//     plus:'+',
//     minus:'-',
//     slash:'/',
//     multiplay:'*',
// }