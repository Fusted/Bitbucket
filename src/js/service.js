async function getInfo(url){   
        const response = await fetch(url)
        const commits = await response.json()
        return commits
}


export {
    getInfo,
}