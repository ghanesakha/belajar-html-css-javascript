// Function to change background color when button is clicked
function changeBackgroundColor() {
  const body = document.body;
  body.style.backgroundColor = getRandomColor();
}

// Generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add event listener to the button
const button = document.getElementById('change-bg');
button.addEventListener('click', changeBackgroundColor);
