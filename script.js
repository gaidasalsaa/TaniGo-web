function increase(button) {
  const span = button.parentElement.querySelector('span');
  span.textContent = parseInt(span.textContent) + 1;
}

function decrease(button) {
  const span = button.parentElement.querySelector('span');
  if (parseInt(span.textContent) > 0) {
    span.textContent = parseInt(span.textContent) - 1;
  }
}

function showPopup(title, description) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-description').innerText = description;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
