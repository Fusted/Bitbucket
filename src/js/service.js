async function getInfo(url){   
        const response = await fetch(url)
        const commits = await response.json()
        return commits
}

function pushCard(card, url){
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(card)
    })
}

export {
    getInfo,
    pushCard
}