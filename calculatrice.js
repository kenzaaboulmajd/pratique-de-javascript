fetch('calculatrice.json')
    .then(response => response.json())
    .then(data => {
        const numbers = data.numbers;
        let table = '<table border="1"><tr><th>*</th>';
        numbers.forEach(num => {
            table += `<th><button class='num-btn column-btn' data-value="${num}">${num}</button></th>`;
        });
        table += '</tr>';
        numbers.forEach(num => {
            table += `<tr><th><button class='num-btn row-btn' data-value="${num}">${num}</button></th>`;
            numbers.forEach(multiplier => {
                table += `<td><button class='result-btn' data-row="${num}" data-col="${multiplier}" style="display: none;">${num * multiplier}</button></td>`;
            });
            table += '</tr>';
        });
        table += '</table>';
        document.body.innerHTML += table;
        let firstNumber = null;
        let firstType = null; 
        document.querySelectorAll('.num-btn').forEach(button => {
            button.addEventListener('click', () => {
                let value = parseInt(button.getAttribute('data-value'), 10);
                let isRow = button.classList.contains('row-btn');
                let isColumn = button.classList.contains('column-btn');
                if (firstNumber === null) {
                    firstNumber = value;
                    firstType = isRow ? 'row' : 'column';
                } else {                   
                    const secondNumber = value;
                    let row, col;
                    if (firstType === 'row') {
                        row = firstNumber;console.log('Fetching data from calculatrice.json');
fetch('calculatrice.json')
    .then(response => {
        console.log('Received response from calculatrice.json');
        return response.json();
    })
    .then(data => {
        console.log('Received data from calculatrice.json:', data);
        const numbers = data.numbers;
        let table = '<table border="1"><tr><th>*</th>';
        numbers.forEach(num => {
            table += `<th><button class='num-btn column-btn' data-value="${num}">${num}</button></th>`;
        });
        table += '</tr>';
        numbers.forEach(num => {
            table += `<tr><th><button class='num-btn row-btn' data-value="${num}">${num}</button></th>`;
            numbers.forEach(multiplier => {
                table += `<td><button class='result-btn' data-row="${num}" data-col="${multiplier}" style="display: none;">${num * multiplier}</button></td>`;
            });
            table += '</tr>';
        });
        table += '</table>';
        console.log('Generated table:', table);
        document.body.innerHTML += table;
        let firstNumber = null;
        let firstType = null; 
        document.querySelectorAll('.num-btn').forEach(button => {
            button.addEventListener('click', () => {
                let value = parseInt(button.getAttribute('data-value'), 10);
                let isRow = button.classList.contains('row-btn');
                let isColumn = button.classList.contains('column-btn');
                console.log('Button clicked:', button, 'Value:', value, 'Is Row:', isRow, 'Is Column:', isColumn);
                if (firstNumber === null) {
                    firstNumber = value;
                    firstType = isRow ? 'row' : 'column';
                    console.log('First number selected:', firstNumber, 'Type:', firstType);
                } else {                   
                    const secondNumber = value;
                    let row, col;
                    if (firstType === 'row') {
                        row = firstNumber;
                        col = secondNumber;
                    } else {
                        row = secondNumber;
                        col = firstNumber;
                    }
                    console.log('Second number selected:', secondNumber, 'Row:', row, 'Column:', col);
                    const targetButton = document.querySelector(
                        `.result-btn[data-row="${row}"][data-col="${col}"]`
                    );
                    if (targetButton) {
                        targetButton.style.display = 'inline-block';
                        console.log('Result button displayed:', targetButton);
                    } 
                    firstNumber = null;
                    firstType = null;
                }
            });
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
                        col = secondNumber;
                    } else {
                        row = secondNumber;
                        col = firstNumber;
                    }
                    const targetButton = document.querySelector(
                        `.result-btn[data-row="${row}"][data-col="${col}"]`
                    );
                    if (targetButton) {
                        targetButton.style.display = 'inline-block';
                    } 
                    firstNumber = null;
                    firstType = null;
                }
            });
        });
    });