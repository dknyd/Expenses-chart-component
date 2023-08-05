const barData = [
  { "day": "mon", "amount": 17.45 },
  { "day": "tue", "amount": 34.91 },
  { "day": "wed", "amount": 52.36 },
  { "day": "thu", "amount": 31.07 },
  { "day": "fri", "amount": 23.39 },
  { "day": "sat", "amount": 43.28 },
  { "day": "sun", "amount": 25.48 }
];
const bars = document.querySelectorAll('.bar');

function createProportionalBars() {
  const totalAmount = barData.reduce((sum, item) => sum + item.amount, 0);

  bars.forEach((bar, index) => {
    const proportionalHeight = (barData[index].amount / totalAmount) * 400;
    bar.style.height = `${proportionalHeight}%`;
  });
}

window.onload = createProportionalBars;


bars.forEach((bar) => {
  bar.addEventListener("mouseover", function() {
    console.log("Hello");
  });
});






// Loop through each bar element
bars.forEach(bar => {
  // Add a mouseover event listener
  bar.addEventListener('mouseover', () => {
    // Find the corresponding numberAmount element
    const numberAmount = bar.querySelector('.numberAmount');
    
    // Make the numberAmount element visible
    numberAmount.style.visibility = 'visible';
  });
  
  // Add a mouseout event listener to hide the numberAmount element when the mouse moves out
  bar.addEventListener('mouseout', () => {
    const numberAmount = bar.querySelector('.numberAmount');
    numberAmount.style.visibility = 'hidden';
  });
});
