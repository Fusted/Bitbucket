import { pushCard } from "./service"

const itemsWrapper = document.querySelector('.main__side')

function transformCards(img, title, desc, price, id){
    return `
    <div id='${id}' class="main__item">
        <img src="${img}" alt="${title}">
        <span class='trash'></span>
        <div class='text__wrapper'>
            <h2>${title}</h2>
            <p>${desc}</p>
            <div class="price">${price} руб.</div>
        </div>
    </div>
    `
}


function addCrads(cardList) {
    
    
    cardList.forEach(item => {
        const {img, title, desc, price, id} = item
        itemsWrapper.innerHTML += transformCards(img, title, desc, price, id)
    })
}

function removeCards(){
    itemsWrapper.innerHTML = ''
}

function addCard(card){
    const {img, title, desc, price, id} = card
    itemsWrapper.innerHTML += transformCards(img, title, desc, price, id)
    pushCard(card, 'http://localhost:3000/cards')
}


export  {addCrads, transformCards, addCard, removeCards}