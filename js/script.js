// const compute = document.getElementById('compute');
// const input = prompt('Enter equation').replace(' ', '').split('')
// compute.addEventListener('click', operate())
// const equation = document.getElementById('results').textContent.replace(' ', '');
function parseString(arr){
    while(arr.length !== 1){
        let product = operate(arr[0], arr[2],arr[1]);
        arr.splice(0, 3);
        arr.unshift(product);
    }
    console.log(arr[0]);
}
function operate(x, y, operator){
    switch(operator){
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '*':
            return multiply(x,y);
        case '/':
            return divide(x,y);
    }
}

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
// parseString(input)
parseString([3, '+', 1, '+', 5, '-', 2]);