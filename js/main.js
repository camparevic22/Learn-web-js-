const btn = document.getElementById('search-button') // dugme
const input = document.getElementById('search-input') // input usera
const cont = document.getElementById('results-container') // jeste

btn.addEventListener('click', async() => {
    const trazen = input.value

    if(!trazen) //ako nije nista ukucao
    {
        alert('Ukucaj nesti braveeeeeeee')
        return
    }

    try
    {
        const album = await fetchujAlbum(trazen) // pozovi iz api.js

        cont.innerHTML = '' //cisti rez

        album.forEach(alb => { //kreiraj html
            const div = document.createElement('div')
            div.innerHTML = `
            <p><strong>${alb.name}</strong> - ${alb.artists[0].name}</p>`
            cont.appendChild(div)
        });
    }catch(error)
    {
        cont.innerHTML = `<p style="color:red;">${error.message}</p>` // ako rikne api
    }

})