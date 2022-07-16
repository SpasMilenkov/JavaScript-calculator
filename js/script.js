const equation = document.getElementById('results');
const compute = document.getElementById('compute');
compute.addEventListener('click', calcValue(equation.textContent));   //get the = button to solve the equation when pressed

const del = document.getElementById('delete');
del.addEventListener('click',() => {
    equation.textContent = '';
}); //trigger the del button to clear the input



const buttons = [...document.querySelectorAll('[data-usage="input"]')];    //get the buttons to add input in the equation
buttons.forEach(button => button.addEventListener( 'click', () => {
    if(isNaN(button.textContent)){
        equation.textContent += ` ${button.textContent} `; //putting space around each operation so i can split it easily
        return;
    }
    equation.textContent += `${button.textContent}`;
}));

function calcValue(arr){                    //the main logic behind solving the equation
    arr = arr.split(' ');       //splitting to distinguish numbers from operations
    while(arr.length !== 1){ //while loop that does multiplication and division prioritizing them over addition and subtraction
        let multiplication = arr.indexOf('*'); 
        let division = arr.indexOf('/');
        while(multiplication !== -1 || division !== -1){
            if(multiplication === -1)
                multiplication = 999;
            if(division === -1)
                division = 999;
            if(multiplication < division){
                    let before = arr.slice(0, multiplication-1);
                    let after = arr.slice(multiplication+2);
                    before.push(operate(arr[multiplication-1], arr[multiplication+1], '*'));
                    arr = before.concat(after);
            }
            if(multiplication > division){
                let before = arr.slice(0, division-1);
                let after = arr.slice(division+2);
                before.push(operate(arr[division-1], arr[division+1], '/'));
                arr = before.concat(after);
            }
            multiplication = arr.indexOf('*');
            division = arr.indexOf('/');
        }

        if(arr.length !== 1){ //if there are other operations like addition and subtraction they are done in this block
            let product = operate(arr[0], arr[2],arr[1]);
            arr.splice(0, 3);
            arr.unshift(product);
        }
    }
    console.log(arr[0]); //returns the result
}
function parseString(str){

}
function operate(x, y, operator){ //calls different operation based on the operator
    switch(operator){
        case '+':
            return add(Number(x),Number(y));
        case '-':
            return subtract(Number(x),Number(y));
        case '*':
            return multiply(Number(x),Number(y));
        case '/':
            return divide(Number(x),Number(y));
    }
}

 //the basic logic behind the operations

function add(x,y){
    return x+y;
}

function subtract(x,y){
    return add(x,-y)
}

function multiply(x,y){
    return x*y
}

function divide(x,y){
    return multiply(x, 1 / y)
}