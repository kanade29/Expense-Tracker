const expenseForm = document.getElementById('expense-form');
        const expenseList = document.getElementById('expense-list');
        let totalAmount = 0;

        expenseForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const amount = parseFloat(document.getElementById('amount').value);
            const description = document.getElementById('description').value;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${amount.toFixed(2)}</td>
                <td>${description}</td>
                <td><button onclick="deleteExpense(this, ${amount})">Delete</button></td>
            `;
            expenseList.appendChild(row);
            
            totalAmount += amount;
            updateTotal();

        
            document.getElementById('amount').value = '';
            document.getElementById('description').value = '';
        });

        function deleteExpense(button, amount) {
           
            const row = button.parentNode.parentNode;
            row.remove();
            
        
            totalAmount -= amount;
            updateTotal();
        }

        function updateTotal() {
            document.getElementById('total').innerText = `Total: $${totalAmount.toFixed(2)}`;
        }


