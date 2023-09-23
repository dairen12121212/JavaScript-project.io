

// slider 
const sliderLine = document.querySelector('.slider__line')
const sliderPrev = document.querySelector('.slider__button-prev')
const sliderNext = document.querySelector('.slider__button-next')

let sliderOffset = 0

sliderNext.addEventListener('click', () => {
    sliderOffset += 1200
    if (sliderOffset > 2400) {
        sliderOffset = 0
    }
    sliderLine.style.transform = `translateX(${-sliderOffset + 'px'})`
})

sliderPrev.addEventListener('click', () => {
    sliderOffset -= 1200
    if (sliderOffset < 0) {
        sliderOffset = 2400
    }
    sliderLine.style.transform = `translateX(${-sliderOffset + 'px'})`
})


//////////////////////////////////////////////////////

const tabsNav = document.querySelectorAll('.tabs__button');
const tabsItem = document.querySelectorAll('.tabs__item');

let tabIndex = 0;

function selectTabsNav() {
    tabsNav.forEach(item => item.classList.remove('tabs__button_active'))
    this.classList.add('tabs__button_active')
    tabIndex = this.getAttribute('data-index')
    selectTasbContent()
}

function selectTasbContent() {
    tabsItem.forEach(item => {
        item.classList.add('tabs_hidden')
        item.classList.remove('tabs_show')
    })
    tabsItem[tabIndex].classList.add('tabs_show')
}

tabsNav.forEach(item => item.addEventListener('click', selectTabsNav))


////////////////////////////////////////////////////////////////////////////
// modal

const openModalBtn = document.querySelectorAll('.modal__card')
const modal = document.querySelector('.modal__popup')
const close = document.querySelector('.modal__close')


openModalBtn.forEach(item => item.addEventListener('click', openModal))

function openModal() {
    modal.classList.remove('modal_hidden')
    modal.classList.add('modal_show')
    // console.log('hello');
}
close.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.add('modal_hidden')
    modal.classList.remove('modal_show')
}

////////////////////////////////////////////////////
// accordion
const accordionBtns = document.querySelectorAll('.accordion__button')
const accordiontext = document.querySelectorAll('.accordion__text')


accordionBtns.forEach(item => item.addEventListener('click', () => {
    let content = item.nextElementSibling
    // content.style.display = 'block'
    if (content.style.display == 'block') {
        content.style.display = 'none'
    } else {
        content.style.display = 'block'
    }
}))


///////////////////////////////////////////////
//counter 

const count = document.querySelector('.counter__content')
const inc = document.querySelector('.counter__inc')
const dec = document.querySelector('.counter__dec')

inc.addEventListener('click', () => count.textContent = +count.textContent + 1)
dec.addEventListener('click', () => count.textContent = +count.textContent - 1)


const style = document.querySelector('.style')
const area = document.querySelector('.edit__input')

area.addEventListener('input', () => {
    // console.log(area.value);
    style.textContent = area.value
})


//////////////////////////////////////
//add\delete card

const addCard = document.querySelector('.cards__add')
const removeCard = document.querySelector('.cards__remove')
const cardsContainer = document.querySelector('.cards__container')

const cardsArr = []
let cardCount = 0

addCard.addEventListener('click', () => {
    const elem = document.createElement('div')
    cardsArr.push(elem)
    elem.classList.add('cards__item')
    elem.textContent = cardCount += 1
    cardsContainer.appendChild(elem)

    if (cardsArr.length >= 8) {
        addCard.disabled = true
    }

})
removeCard.addEventListener('click', () => {
    if ((cardsArr.length - 1) < 8) {
        addCard.disabled = false
    }
    cardsArr.pop()
    cardCount = cardsArr.length
    cardsContainer.lastChild.remove()
})