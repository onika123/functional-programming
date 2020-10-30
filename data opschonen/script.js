//live coding tutorial

// stop alle data in een string
// plaatst de data in de html file
const surveyAnswers = data;
console.log("Survey answers are;", surveyAnswers)

//bekijk wat er in de antwoorden zit
console.log(surveyAnswers[0])

// haal een specifiek antwoord op uit participant 3
console.log(surveyAnswers[3].bedragPerMaandAanKleding)

//kan ook tussen brackets en dan als string opgeven als er bv een spatie tussenzit
//console.log(surveyAnswers[3] ['bedragPerMaand AanKleding'])

//variabele met lijst van belangrijkste onderwerpen
let belangrijksteOnderwerpen = []
//door 'of' te gebruiken gaat hij het antwoord van de index gebruiken
for (answer of surveyAnswers){
    belangrijksteOnderwerpen.push(answer.belangrijksteOnderwerpVanDezeTijd)
}
console.log(belangrijksteOnderwerpen)


//map voert functie uit voor elk element in array, is de functie hierboven in 1 regel!
const specificAnswers = surveyAnswers.map(answer => answer[kolomNaam])
 console.log(specificAnswers)

//oogkleur data opschonen
let kolomNaam = "oogKleur"
let lijstAntwoorden = []
let oogKleurData

for(answer of surveyAnswers){
    lijstAntwoorden.push(answer[kolomNaam]);
}

function dataOpschonenOogkleur(){
    let oogKleurData = listOfAnswers.map(entry => rgbToHex(entry.toUpperCase())); 
    }
//variabele met lijst van belangrijkste onderwerpen
let hexOogKleur = [];
//door 'of' te gebruiken gaat hij het antwoord van de index gebruiken
for (answer of surveyAnswers){
    hexOogKleur.push(answer.oogKleur)
    //console.log(hexOogKleur)
}

//hoeveel antwoorden zijn er gegeven bij oogKleur
//console.log(hexOogKleur.length)

//elk antwoord de index en waarde loggen
// hexOogKleur.forEach(function (value) {
//     console.log (value, index)
//})

