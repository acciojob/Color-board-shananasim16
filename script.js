//your JS code here. If required.
//your JS code here. If required.
const container = document.querySelector('.container');

// Create 800 squares and append them to the container
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);

  square.addEventListener('mouseover', () => {
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
    setTimeout(() => {
      square.style.backgroundColor = 'rgb(29, 29, 29)'; // Set back to default color after 1 second
    }, 1000);
  });
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
