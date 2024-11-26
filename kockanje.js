// Get all the square elements
const squares = document.querySelectorAll('.square');

// Add event listeners to each square
squares.forEach(square => {
  square.addEventListener('click', () => {
    // Toggle the border radius
    square.classList.toggle('rounded');
  });

  square.addEventListener('mouseenter', () => {
    // Change the background color to green
    square.style.backgroundColor = 'green';
  });

  square.addEventListener('mouseleave', () => {
    // Change the background color back to white
    square.style.backgroundColor = 'white';
  });
});

// Add event listener to the "Add a box" button
const addBoxButton = document.querySelector('#add-box');
addBoxButton.addEventListener('click', () => {
  // Create a new square element
  const newSquare = document.createElement('div');
  newSquare.classList.add('square');

  // Add event listeners to the new square
  newSquare.addEventListener('click', () => {
    newSquare.classList.toggle('rounded');
  });

  newSquare.addEventListener('mouseenter', () => {
    newSquare.style.backgroundColor = 'green';
  });

  newSquare.addEventListener('mouseleave', () => {
    newSquare.style.backgroundColor = 'white';
  });

  // Append the new square to the container
  const container = document.querySelector('.container');
  container.appendChild(newSquare);
});