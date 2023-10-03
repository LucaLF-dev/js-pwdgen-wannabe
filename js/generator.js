// # (insicurisimo) Password generator

// - Chiediere all’utente il suo nome:
//   - dichiarare una variabile 
let userName
//   - assegnare alla variabile il valore restituito dal prompt sul nome
userName = prompt('Ciao, qual è il tuo nome?')
console.log(userName)

// - Chiedere il suo cognome:
//   - dichiarare una variabile 
let userSurname
//   - assegnare alla variabile il valore restituito dal prompt sul cognome
userSurname = prompt(' qual è il tuo cognome (scrivilo senza spaziature)?')
console.log(userSurname) 
// - Chiedere il suo colore preferito:
//   - dichiarare una variabile 
let userFavoriteColor
//   - assegnare alla variabile il valore restituito dal prompt sul colore
userFavoriteColor = prompt('Qual è il tuo colore preferito?')
console.log(userFavoriteColor)
// - Concatenare il nome , il cognome, il colore preferito dell' utente e il numero 21:
//   - dichiarare una variabile cho contiene la quarta parte della password
let fourthPartOfPassword = '21'
console.log(fourthPartOfPassword)
//   - dichiarare una variabile password dove concateniamo le tre stringhe ed il numero 21
let password = userName + userSurname + userFavoriteColor + fourthPartOfPassword
console.log(password)
// - Scrivere sulla pagina il risultato della concatenazione: nomecognomecolorepreferito21
//   - inserire nell' html un tag con id="password"
//   - recuperare con js l' elemento del Dom con id="password"
const passwordDomElement = document.getElementById('password')
console.dir(passwordDomElement)
//   - modificare l ' innerHTML del tag con il valore della variabile password 