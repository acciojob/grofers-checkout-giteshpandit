const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all prices from the table
  const prices = document.querySelectorAll(".prices");
  
  // Initialize total price to 0
  let totalPrice = 0;
  
  // Loop through each price and add it to the total
  prices.forEach((price) => {
    totalPrice += parseFloat(price.textContent);
  });
  
  // Create a new row and cell to display the total price
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Assuming two columns in the table
  totalCell.textContent = `Total: $${totalPrice.toFixed(2)}`;
  (link unavailable) = "ans"; // Add the id "ans" to the total cell
  
  // Add the total row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
  totalRow.appendChild(totalCell);
};

getSumBtn.addEventListener("click", getSum);










