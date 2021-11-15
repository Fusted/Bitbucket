import {getInfo} from './service'
import {removeCards, addCrads} from './card'

function deleteCard(id){
    fetch('http://localhost:3000/cards/' + id, {
            method: "delete",
            headers: { "Content-Type": "application/json" },
        })
        .then(resp => {
            if (resp.status === 200) {
                return resp.json()
            } else {
                return Promise.reject("server")
            }
        })
        .then(() => {
            removeCards()
            const cards = getInfo('http://localhost:3000/cards')
            cards.then(cards => {
                addCrads(cards)
            })
        })
        .catch(err => {
            if (err === "server") return
            console.log(err)
        }) 
    
}

export default deleteCard


/* 
deleteData = (id) => {    
        fetch('http://localhost:3000/data/' + id, {
            method: "delete",
            headers: { "Content-Type": "application/json" },
           
        })
        .then(resp => {
            if (resp.status === 200) {
                return resp.json()
            } else {
               // console.log("Status: " + resp.status)
                return Promise.reject("server")
            }
        })
        .catch(err => {
            if (err === "server") return
            console.log(err)
        }) 
    }
*/