document.getElementById('calculate-btn').addEventListener('click', () => {
  // Select all the elements with class "price"
  const prices = document.querySelectorAll('.price');
  let total = 0;

  // Loop through each price and add it to the total
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Check if the total row already exists and remove it to avoid duplicates
  const existingTotalRow = document.getElementById('total-row');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for the total price
  const table = document.getElementById('grocery-table');
  const newRow = document.createElement('tr');
  newRow.setAttribute('id', 'total-row');
  
  const newCell = document.createElement('td');
  newCell.setAttribute('colspan', '2');
  newCell.textContent = `Total Price: ₹${total}`;
  newRow.appendChild(newCell);

  // Add the new row to the table
  table.appendChild(newRow);
});











