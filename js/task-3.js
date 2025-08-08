const searchInput = document.querySelector('#name-input');
const spanId = document.querySelector('#name-output');

searchInput.addEventListener('input', () => {
  const trimmedValue = searchInput.value.trim();
  spanId.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});