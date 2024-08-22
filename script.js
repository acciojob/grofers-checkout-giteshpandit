// Create the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with the class "prices"
  const prices = document.querySelectorAll(".prices");

  // Initialize a variable to store the total sum
  let totalPrice = 0;

  // Loop through each price and add its value to totalPrice
  prices.forEach(price => {
    totalPrice += parseFloat(price.textContent);
  });

  // Check if a total row already exists and remove it if necessary
  const existingTotalRow = document.querySelector("#totalRow");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for the total price
  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow"; // Set an ID for the total row

  // Create a single cell that spans the table columns
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Adjust based on the number of columns in the table
  totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`;

  // Append the cell to the row
  totalRow.appendChild(totalCell);

  // Append the total row to the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

// Attach the click event listener to the button
getSumBtn.addEventListener("click", getSum);



