const compute = document.getElementById('compute');
const input = prompt().replace(' ', '').split('')
compute.addEventListener('click', operate())
const equation = document.getElementById('results').textContent.replace(' ', '');

function parseString(arr){
    while(arr.length !== 1){
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
        let product = operate(arr[0], arr[2],arr[1]);
        arr.splice(0, 3);
        arr.unshift(product);
    }
    console.log(arr[0]);
}
function operate(x, y, operator){
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
parseString(input)
// parseString([5,'+',3,'+',4,'/',2,'*', 5]);