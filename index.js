const buttons = document.querySelectorAll(".cal-buttons button");
const display = document.querySelector(".display");
const operators = ["+", "-", "×", "÷"];

let currentInput = "";
let hasCalculated = false;

function handleInput(value) {
  const lastCharacter = currentInput.slice(-1); 
    
    if (currentInput === "" && operators.includes(value)){

        return;

    }else if (value === "⌫") {
    
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput;


    }else if(value === "AC" ){
     
        currentInput = "";
        display.textContent = currentInput;
        

    }else if (operators.includes(value) && operators.includes(lastCharacter)) {
        
        if (value === lastCharacter) {
            return;
        }
            
            currentInput = currentInput.slice(0, -1);
            currentInput += value;
            display.textContent = currentInput;
            return;

    }else if (value === "=" ){
         
        if(operators.includes(lastCharacter)){
            return;
        }
        
        const expression = currentInput.replaceAll("×", "*").replaceAll("÷", "/");
     
            try {currentInput = String(eval(expression));
                 
                display.textContent = currentInput;
                hasCalculated = true;
            } catch (error) {
            
                console.log(error)
                display.textContent = "Error";
                currentInput = "";
                hasCalculated = false;
            }
       

    } else{
        
        
    let hasDecimal = false;

         
    for (let i = currentInput.length - 1; i >= 0; i--) {

        const character = currentInput[i];

             if (operators.includes(character)) {
                
                break;

             }

            if (character === ".") {

                 hasDecimal = true;
                 break;

            }  
    }

            if (value === "." && hasDecimal) {
                
                return;

            }  
            
            if(hasCalculated && !operators.includes(value)){
                currentInput = "";
                hasCalculated = false;
            }

        currentInput += value;
        display.textContent = currentInput;
       
    } 


 
}

for (let i = 0; i < buttons.length; i++) {
 buttons[i].addEventListener("click",()=>{
 
    handleInput(buttons[i].textContent)
    //const value = buttons[i].textContent;
   
});
  
}


document.addEventListener("keydown", (event) => {
let value = event.key;

switch(value) {
    case "Enter":
        value = "=";
        break;
    case "Backspace":
        value = "⌫"
        break;
    case "Escape":
        value = "AC"
        break;
}

if (!("0123456789".includes(value)) && 
    !(operators.includes(value)) &&
    value !== "=" && 
    value !== "." && 
    value !== "⌫" && 
    value !== "AC")
{
    
    return;

}

handleInput(value);
});