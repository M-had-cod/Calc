
let screen = document.getElementById('screen');

function press(val) {
  if (screen.value === '0') {
    screen.value = val;
  } else {
    screen.value += val;
  }
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = 'غلط';
  }
}

function clearScreen() {
  screen.value = '0';
}
  
  function showModal() {
  document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}
  