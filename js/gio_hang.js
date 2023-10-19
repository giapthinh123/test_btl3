const input = document.querySelector('.so');

function increaseQuantity() {
  const currentValue = parseInt(input.value);
  input.value = currentValue + 1;
}

function decreaseQuantity() {
  const currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
  }
}

function toggleSelection() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = !checkbox.checked;
  });
}