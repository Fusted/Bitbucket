function transformCards(img, title, description, price, id){
    return `
    <div id='${id}' class="main__item">
        <img src="${img}" alt="${title}">
        <div class='text__wrapper'>
            <h2>${title}</h2>
            <p>${description}</p>
            <div class="price">${price} руб.</div>
        </div>
    </div>
    `
}


function addCrads(cardList) {
    const itemsWrapper = document.querySelector('.main__side')
    
    cardList.forEach(item => {
        const {img, title, description, price, id} = item
        itemsWrapper.innerHTML += transformCards(img, title, description, price, id)
    })
}


export  {addCrads, transformCards}