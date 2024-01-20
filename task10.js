function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    var boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';

    for (var i = 0; i < amount; i++) {
      var box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    var boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }

  document.querySelector('[data-create]').addEventListener('click', function() {
    var amount = document.querySelector('input').value;
    createBoxes(amount);
  });

  document.querySelector('[data-destroy]').addEventListener('click', function() {
    destroyBoxes();
  });