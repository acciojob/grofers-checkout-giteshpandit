// Selecting the "Get Total Price" button
const getSumBtn = document.getElementById("getTotalPriceBtn");

const getSum = () => {
  // Get all prices from the table (selecting elements with class 'price')
  const prices = document.querySelectorAll(".price");
  
  // Initialize total price to 0
  let totalPrice = 0;
  
  // Loop through each price element and add the value to the total price
  prices.forEach((price) => {
    totalPrice += parseFloat(price.textContent);
  });

  // Check if total row already exists to avoid duplicating
  const existingTotalRow = document.getElementById("totalRow");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row and cell to display the total price
  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow"; // Adding id for easy reference and removal if needed

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Merging two columns for total price display
  totalCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`; // Showing total price with two decimal places

  // Add the total row to the table
  const table = document.querySelector("table");
  totalRow.appendChild(totalCell); // Append the cell to the row
  table.appendChild(totalRow);     // Append the row to the table
};

// Attach the click event listener to the button
getSumBtn.addEventListener("click", getSum);











