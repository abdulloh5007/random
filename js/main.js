let wrapper = document.querySelector('.wrapper')
let boxes = document.querySelector('.boxes')
let btnPlus = document.querySelector('.btn_plus')
let bigBtnCheck = document.querySelector('.big_btn_check')
let min = document.querySelector('.min')
let random = document.querySelector('.random')

min.style.display = 'none'
bigBtnCheck.style.display = 'none'

const data = []

btnPlus.addEventListener('click', () => {
    bigBtnCheck.style.display = 'block'
    bigBtnCheck.style.transform = 'translateY(240px)'

    btnPlus.style.display = 'none'
    let frm = document.createElement('div')
    frm.setAttribute('class', 'frm')
    frm.innerHTML = `
        <input type="text" placeholder="Enter text" class="inp">
        <button type='submit' class="btn_check">
            <i class="bi bi-check2"></i>
        </button>
    `
    frm.classList.add('frm_anim')
    wrapper.appendChild(frm)

    let inp = document.querySelector('.inp')
    let btn_check = document.querySelector('.btn_check')

    bigBtnCheck.addEventListener('click', () => {
        if (data.length >= 6) {
            frm.style.display = 'none'
            bigBtnCheck.style.display = 'none'
            bigBtnCheck.style.borderColor = 'black'
            random.style.display = 'block'

            random.addEventListener('click', () => {
                let box = document.querySelectorAll('.box')
                for (let i = 0; i < box.length; i++) {
                    const el = box[i];
                    el.style.display = 'none'
                }
                let boxRandom = document.createElement('div')
                boxRandom.setAttribute('class', 'box')
                let randomIndex = Math.floor(Math.random() * data.length);
                // Получаем случайный элемент из массива
                let randomElement = data[randomIndex];
                boxRandom.innerHTML = `<h1 class='box_h1'>${randomElement}</h1>`
                boxes.appendChild(boxRandom)
            })
        }
        else {
            bigBtnCheck.style.borderColor = 'red'
            min.style.display = 'block'
            bigBtnCheck.style.display = 'none'
        }
    })

    btn_check.addEventListener('click', () => {
        data.map((e) => {
            if (inp.value == e) {
                inp.value = ''
                inp.style.border = '.3px solid red'
                inp.setAttribute('placeholder', 'This text is exists')
            }
        })
        if (inp.value.length >= 70) {
            inp.value = ''
            inp.style.border = '.3px solid red'
            inp.setAttribute('placeholder', 'Max letters 70')
        }
        if (inp.value.length >= 1) {
            inp.style.border = '.3px solid black'
            data.push(inp.value)
            startCountdown('<i class="bi bi-check2"></i>')
            inp.setAttribute('placeholder', 'Enter text')
            min.style.display = 'none'
            bigBtnCheck.style.display = 'block'
            bigBtnCheck.borderColor = 'black'
            inp.value = ''

            let box = document.createElement('div')

            data.map((e) => {
                box.innerHTML = `
                    <div class="box">
                        <h2 class='box_h2'>${e}</h2>
                    </div>
                `
            })
            boxes.appendChild(box)
        }
        else {
            inp.style.border = '.3px solid red'
        }
    })
})


function startCountdown(e) {
    var countdownElement = document.querySelector(".btn_check");

    // Изменяем текст кнопки и делаем ее недоступной
    var button = document.querySelector(".btn_check");
    button.disabled = true;

    // Обратный счет от 5 до 0
    for (var i = 3; i >= 0; i--) {
        setTimeout(function (count) {
            countdownElement.innerHTML = "seconds left: " + count;

            if (count === 0) {
                button.innerHTML = `${e}`;
                button.disabled = false;
            }
        }, (3 - i) * 1000, i);
    }
}