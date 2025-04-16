// Create a well-structured HTML5 document.
// Use at least 5 different HTML elements.
// Ensure semantic correctness.
// Change text and style
const changeBtn = document.getElementById('change-btn');
const text = document.getElementById('text');

changeBtn.addEventListener('click', () => {
  text.textContent = "The text has been changed dynamically!";
  text.style.color = "#0057b7";
  text.style.fontWeight = "bold";
  text.style.backgroundColor = "#e0f7fa";
  text.style.padding = "10px";
  text.style.borderRadius = "8px";
});

// Add and remove element
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const container = document.getElementById('dynamic-container');

addBtn.addEventListener('click', () => {
  if (!document.getElementById('new-paragraph')) {
    const newElement = document.createElement('p');
    newElement.id = 'new-paragraph';
    newElement.textContent = "This paragraph was added with JavaScript!";
    newElement.style.color = "#4CAF50";
    container.appendChild(newElement);
  }
});

removeBtn.addEventListener('click', () => {
  const element = document.getElementById('new-paragraph');
  if (element) {
    container.removeChild(element);
  }
});
