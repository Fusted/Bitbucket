import './scss/base.scss'
import './scss/typography.scss'
import {addCrads, transformCards} from './js/card'
import './js/addCard'
import {getInfo} from './js/service'


window.addEventListener('DOMContentLoaded', () => {
    
    const cards = getInfo('http://localhost:3000/cards')

    cards.then(cards => {
        addCrads(cards)
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
                console.log('done')
            }
        })
    })
    
    
    
    
})