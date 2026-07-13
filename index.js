const buttons = document.querySelectorAll(".cal-buttons button");
const display = document.querySelector(".display");

let currentInput = "";

for (let i = 0; i < buttons.length; i++) {
 buttons[i].addEventListener("click",()=>{
 
    //currentInput += buttons[i].textContent;
    //display.textContent = currentInput;

    const value = buttons[i].textContent;
    if(value === "AC" ){
     
        currentInput = "";
        display.textContent = currentInput;
   
    } else if (value === "=" ){
         const expression = currentInput.replaceAll("×", "*").replaceAll("÷", "/");
        //expression.replaceAll("×", "*");
        //expression.replaceAll("÷", "/");
        currentInput = String(eval(expression));
        display.textContent = currentInput;

    } else{
        currentInput += value;
        display.textContent = currentInput;
    }


 });
}