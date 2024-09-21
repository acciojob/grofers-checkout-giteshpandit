document.getElementById('calculate-btn').addEventListener('click', () => {
  // Select all the elements with class "prices"
  const prices = document.querySelectorAll('.prices');
  let total = 0;

  // Loop through each price and add it to the total
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Create a new row for the total price
  const table = document.getElementById('grocery-table');
  const newRow = document.createElement('tr');
  const newCell = document.createElement('td');
  
  // Set the new cell to span both columns and display the total
  newCell.setAttribute('colspan', '2');
  newCell.textContent = `Total Price: ₹${total}`;
  newRow.appendChild(newCell);

  // Add the new row to the table
  table.appendChild(newRow);
});











