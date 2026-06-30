# Spotify Album Finder

Jednostavna web aplikacija za pretragu albuma na Spotify-ju.


## Kako pokrenuti
1. Otvori projekat u VS Code-u.
2. Koristi **Live Server** ekstenziju da pokreneš `index.html`.
3. U `js/api.js` fajlu, promeni `token` promenljivu sa važećim Spotify Access Tokenom.

## Struktura
- `index.html`: Glavni interfejs.
- `js/api.js`: Logika za komunikaciju sa Spotify API-jem.
- `js/main.js`: Povezivanje korisničkog unosa sa API-jem i prikaz rezultata.

## Napomena
* Aplikacija zahteva validan OAuth token sa Spotify Developer konzole.
* Ako dobiješ grešku `401 Unauthorized`, token je istekao – generiši novi u Spotify dokumentaciji.
