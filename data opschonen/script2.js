//stop alle data in een string
//plaats de data in de html file
const surveyAnswers = data;
console.log("Survey anwers are;", surveyAnswers)


//lijst met antwoorden van belangrijkste onderwerpen aanroepen
let belangrijksteOnderwerpen = []
for (answer of surveyAnswers) {
    belangrijksteOnderwerpen.push(answer.belangrijksteOnderwerpVanDezeTijd)
}
console.log(belangrijksteOnderwerpen)

//lijst met antwoorden van oogkleur aanroepen
let oogKleur = []
let oogkleurData
for (answer of surveyAnswers) {
    oogKleur.push(answer.oogKleur)
}

//lijst met antwoorden koffie/thee
let koffieThee = []
let koffieData
let theeData
let koffieTheeData
for (answer of surveyAnswers) {
    koffieThee.push(answer.theeOfKoffie)
}

//console.log(koffieThee)

//functie voor koffie en thee opschonen
function dataOpschonenKoffieThee() {

    //antwoorden met alleen koffie
    koffieData = koffieThee.filter(entry => entry === "Koffie");
    //hoeveel participanten drinken alleen koffie
    console.log("Aantal participanten die alleen koffie drinken:", koffieData.length)

    //antwoorden met alleen thee
    theeData = koffieThee.filter(entry => entry === "Thee");
    //hoeveel participanten drinken alleen thee
    console.log("Aantal participanten die alleen thee drinken:",theeData.length)

    //antwoorden met beide
    koffieTheeData = koffieThee.filter(entry => entry === "Thee. Koffie")
    //hoeveel participanten drinken beide
    console.log("Aantal participanten die beide drinken:",koffieTheeData.length)

};

//functie uitvoeren
dataOpschonenKoffieThee()


//functies voor oogkleurData opschonen
function dataOpschonenOogkleur() {

    //van de antwoorden hoofdletters maken
    oogkleurData = oogKleur.map(entry => entry.toUpperCase());

    //van rgb naar hex
    //oogkleurData = oogkleur.forEach(element => {
        
    

};

//functie uitvoeren
dataOpschonenOogkleur()
console.log(oogKleur)

