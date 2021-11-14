import {addCard} from './card'

function addForm(){
    document.querySelector('.form').addEventListener('submit', (e) => {
        e.preventDefault()
        const inputs = document.querySelectorAll('.important')
        
        const filled = [],
              notFilled = []
        inputs.forEach(input => {
            if (input.value){
                filled.push(input)
            } else {
                notFilled.push(input)
            }
        })

        

        if (notFilled.length > 0){
            
            notFilled.forEach(input => {
                input.classList.remove('filled')
                input.classList.add('not-filled')
            })
            filled.forEach(input => {
                input.classList.remove('not-filled')
                input.classList.add('filled')
            })
            console.log('not all forms filled')

        } else {
            /* img, title, desc, price, id */

            const newCard = {
                img: document.querySelector('[data-form=img]').value,
                title: document.querySelector('[data-form=title]').value,
                desc: document.querySelector('[data-form=desc]').value,
                price: document.querySelector('[data-form=price]').value,
                id: `${Math.floor(Math.random() * (1000000 - 100000)) + 10000}${document.querySelector('[data-form=title]').value}`,
            }
            
            addCard(newCard)
        }
    })
}

export default addForm