function OutPut(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let result ='';

    if(!isNaN(num1) && !isNaN(num2) ){
        switch(operator){
            case '+':
            result = num1 + num2;
            break;

            case '-':
            result = num1 - num2;
            break;

            case '*':
            result = num1 * num2;
            break;

             case '/':
             result = num1 / num2;
             break;

            default:
                result = 'invalid operator';
                break;

        }
    }else{
       result = 'please enter valid numbers';
    }
    document.getElementById('demo').innerText ="the result is: " + result;
}

