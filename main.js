const display1El = document.querySelector ('.display-1');
const display2El = document.querySelector ('.display-2')
const tempResultEl = document.querySelector ('.temp-result');
const numbersEl = document.querySelectorAll ('.number');
const operationEl = document.querySelectorAll ('.operation');
const equalEl = document.querySelector ('.equal');
const clearAllEl = document.querySelector ('.all-clear');
const clearLastEl = document.querySelector ('.entity-clear');


let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersEl.forEach( number => {
    number.addEventListener('click', (e)=> {
        if(e.target.innerHTML === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerHTML ==='.' && haveDot){
            return;
        }
        dis2Num += e.target.innerHTML;
        display2El.innerText = dis2Num;
    })
})

operationEl.forEach ( operation =>{
    operation.addEventListener('click' , (e) =>{
        if (!dis2Num) result;
        haveDot=false
        const operationName = e.target.innerHTML
        if (dis1Num && dis2Num && lastOperation){
            mathOperation()
        
        }else{
            result = parseFloat(dis2Num)
        }
        clearVar(operationName)
        console.log(result)
        lastOperation = operationName
     })
    })


    function clearVar(name = ''){
        dis1Num += dis2Num+ '' + name + ''
        display1El.innerHTML = dis1Num;
        display2El.innerHTML = ''
        dis2Num = ''
        tempResultEl.innerHTML = result
    }



function mathOperation(){
    if(lastOperation === '*'){
        result = parseFloat(result)*parseFloat(dis2Num)
    }else if (lastOperation === '+'){
        result =  parseFloat(result)+parseFloat(dis2Num)
    }else if (lastOperation === '-'){
        result =  parseFloat(result)-parseFloat(dis2Num)
    }else if (lastOperation === '/'){
        result =  parseFloat(result)/parseFloat(dis2Num)
    }else if (lastOperation === '%'){
        result =  parseFloat(result)%parseFloat(dis2Num)

    }
    }


    equalEl.addEventListener('click', (e) =>{
        if(!dis1Num || !dis2Num) return;
        haveDot = false
        mathOperation()
        clearVar;
        display2El.innerHTML = result;
        tempResultEl.innerHTML = ('')
        dis2Num = result
        dis1Num = ('')
    })


  clearAllEl.addEventListener('click', (e) =>{
    display1El.innerHTML = '0'
    display2El.innerHTML ='0'
    dis1Num = ''
    dis2Num = ''
    result = ''
    tempResultEl.innerHTML = ''
})


clearLastEl.addEventListener('click', (e) =>{
    display2El.innerHTML = ''
    dis2Num = ''


})

window .addEventListener('keydown', (e) =>{
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.' 
         ){
             clickbuttonEl(e.key)

        
                      
                  }else if (e.key === '%'||
                            e.key ===  '*'||
                            e.key ===  '+'||
                            e.key ===  '/'||
                            e.key ===  '-'
                  
                  ){
                      clickOperation(e.key)
                  }else if(e.key == 'Enter' || e.key === "="){
                      clickEqual()
                  }
                  
              })

              



              function clickbuttonEl(key){
              numbersEl.forEach(button => {
                  if (button.innerHTML === key) {
                      button.click()
                      
                  }
              })

            }
            function clickOperation(key){
                operationEl.forEach(button =>{
                    if(button.innerHTML === key){
                        button.click()
                    }
                })
            }

        function clickEqual(){
            equalEl.click()
        }
