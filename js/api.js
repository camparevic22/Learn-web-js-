async function fetchujAlbum(query) {
    const token = 'tokenko' //ovde stavljas tvoj token :)
    const url = 'urele' //ovde ide url adresa ka spotify api kljucu :)
    const rsp = await fetch(url,{
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token, // Ovako se Spotify "otključava"
            'Content-Type': 'application/json'
        }
    })

    if(!rsp.ok)
    {
        throw new Error('Braleeee greska u komunikaciji' + rsp.status) 
    }

    const data = await rsp.json() //prebaci data u json

    return data.albums.items //vrati  niz
}