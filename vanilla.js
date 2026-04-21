const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

buttons.forEach(function(btns){             //looping each buttons and each button is passed into a function
    btns.addEventListener('click',function(){   //btns when clicked one button 
        let value = btns.textContent;

        if(value=="C"){
            input.value="";
        }else if(value=="="){
            try{
                input.value = eval(input.value);    //Eval is the build in Js function that changes the normal String and executes like it's code
            }catch{
                input.value="Error";
            }
        }else{
            input.value += value;
        }
    });
});