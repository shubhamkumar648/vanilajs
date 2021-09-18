const input1 = document.querySelector("#inputvalue1")
const input2 = document.querySelector("#inputvalue2")
const add = document.querySelector("#add")
const mul = document.querySelector("#mul")
const div = document.querySelector("#divide")
const sub = document.querySelector("#sub")
const outputDisplay = document.querySelector("#output")


add.addEventListener("click" , function sum(){

 let  result  = Number(input1.value) + Number(input2.value)
    
     outputDisplay.innerText = result

// console.log(result)

})


mul.addEventListener("click" , function sum(){

 let  result  = Number(input1.value) * Number(input2.value)
    
     outputDisplay.innerText = result

// console.log(result)

})


div.addEventListener("click" , function sum(){

 let  result  = parseFloat(input1.value) % parseFloat(input2.value)
    
     outputDisplay.innerText = result

// console.log(result)

})


sub.addEventListener("click" , function sum(){

 let  result  = Number(input1.value) - Number(input2.value)
    
     outputDisplay.innerText = result

// console.log(result)

})

