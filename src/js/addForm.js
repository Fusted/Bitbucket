import { InputMask } from 'imask'
import {addCard} from './card'
import { Imask } from 'imask'


function addForm(){
    const inputs = document.querySelectorAll('.important')
    const form = document.querySelector('.form')
    const btn = document.querySelector('.btn')

    let numberMask = IMask(
        document.querySelector('[data-form=price]'),
        {
          mask: Number,
          min: -1000000,
          max: 10000000,
          thousandsSeparator: ' '
        });

    form.addEventListener('change', () => {
        const notFilled = []
        inputs.forEach(field => {
            const input = field.querySelector('input')
            if (!input.value){
                notFilled.push(input)
            } 
        })
        btn.classList.remove('btn-active')
        
        if (notFilled.length == 0){
            btn.classList.add('btn-active')
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const filled = [],
              notFilled = []
        inputs.forEach(field => {
            const input = field.querySelector('input')

            if (input.value){
                field.classList.remove('not-filled')
                filled.push(input)
            } else {
                field.classList.remove('filled')   
                field.classList.add('not-filled')
                notFilled.push(input)
            }
        })


        if (notFilled.length > 0){
            btn.classList.remove('btn-active')
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
        
            const newCard = {
                img: document.querySelector('[data-form=img]').value,
                title: document.querySelector('[data-form=title]').value,
                desc: document.querySelector('[data-form=desc]').value,
                price: document.querySelector('[data-form=price]').value,
                id: `${Math.floor(Math.random() * (1000000 - 100000)) + 10000}`,
            }
            form.reset()
            document.querySelectorAll('.filled').forEach(item => item.classList.remove('filled'))
            addCard(newCard)
        }
    })
}

export default addForm