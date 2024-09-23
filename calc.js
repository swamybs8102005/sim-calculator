let input = document.getElementById('box');
let buttons = document.querySelectorAll('button');
let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                expression = eval(expression);
                input.value = expression;
            } catch (error) {
                input.value = 'Error';
                expression = '';
            }
        } else if (buttonValue === 'AC') {
            expression = "";
            input.value = expression;
        } else if (buttonValue === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += buttonValue;
            input.value = expression;
        }
    });
});
