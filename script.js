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

  // Check if the element with id 'ans' exists
  let ansElement = document.querySelector("#ans");
  if (!ansElement) {
    // Create the element if it doesn't exist
    ansElement = document.createElement("div");
    ansElement.id = "ans";
    document.body.appendChild(ansElement);
  }

  // Update the content of the 'ans' element with the total price
  ansElement.textContent = totalPrice.toFixed(2);
};

// Attach the click event listener to the button
getSumBtn.addEventListener("click", getSum);





