let box = document.querySelector('.box')
let btn = document.querySelector('.btn')

var data = [1, 2, 3, 4, 5, 6,7,8,9];

btn.addEventListener('click', () => {
  
  var randomIndex = Math.floor(Math.random() * data.length);

  // Получаем случайный элемент из массива
  var randomElement = data[randomIndex];
  box.textContent = randomElement
  
  startCountdown()
  
})


function startCountdown() {
  var countdownElement = document.querySelector(".btn");

  // Изменяем текст кнопки и делаем ее недоступной
  var button = document.querySelector(".btn");
  button.disabled = true;

  // Обратный счет от 5 до 0
  for (var i = 5; i >= 0; i--) {
      setTimeout(function (count) {
          countdownElement.innerHTML = "seconds left: " + count;

          if (count === 0) {
              button.textContent = `random`;
              button.disabled = false;
          }
      }, (5 - i) * 1000, i);
  }
}
