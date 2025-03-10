/******************************************************************************
------------------------------------
!LES OPPGAVETEKSTEN NØYE!
------------------------------------

1.

Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

- Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres 
  på det objektet (hint: bruk `continue`-nøkkelordet).

- Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien
  til en random by fra `cities`-arrayen.

- Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for
  menn og "Ms." for kvinner.
	
- Øk alderen med 2.

- Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

**PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene 
og lagre det i variabelen `combinedAge`.

Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen
for alle, og lagre det i variabelen `averageAge`.

Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
	{
		name: "Thomas",
		male: true,
		age: 23,
		hobbies: ["cycling", "football", "pool"],
	},
	{
		name: "Susan",
		male: false,
		age: 26,
		hobbies: ["jogging", "travelling", "dancing"],
	},
	{
		name: "Monica",
		male: false,
		age: 21,
		hobbies: ["skateboarding", "guitar", "concerts"],
	},
	{
		name: "Avery",
		male: true,
		age: 28,
		hobbies: ["writing", "games", "memes"],
	},
	{
		name: "Phillip",
		male: true,
		age: 24,
		hobbies: ["boxing", "wrestling", "mma"],
	},
	{
		name: "Otto",
		male: true,
		age: 36,
		hobbies: ["movies", "cinema", "music"],
	},
	{
		name: "Annabelle",
		male: false,
		age: 30,
		hobbies: ["makeup", "fashion", "shopping"],
	},
	{
		name: "Cathy",
		male: false,
		age: 18,
		hobbies: ["design", "drawing", "css"],
	}
];

let combinedAge = 0; //	184
let averageAge = 0; // 23

// Looping through the people array
for (i = 0; i < people.length; i++) {
	// if the name Otto is found in the name key in the people array
	if (people[i].name === "Otto") {
		// skip otto
		continue;
	}
	//added city to each object in the array, it takes a random city from the cities array an add to city value. 
	people[i].city = cities[Math.floor(Math.random() * cities.length)];
	//added title to each object in the array, if male is true it will give you "Mr." and if false "Ms."
	people[i].title = `${people[i].male ? "Mr." : "Ms."}`;
	//age in each object is +2 
	people[i].age += 2;
	// add "codeing" to the beginning of the hobbies array in each object
	people[i].hobbies.unshift("coding");
	// combinedAge increment the age key of all objects in the people array
	combinedAge += people[i].age;
}

//averageAge get the same value as combinedAge divided on the length of the people array 
averageAge = combinedAge / people.length;

//console.log(people);

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn ett tall som parameter.

Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
(tenk på det som antall terninger vi kaster).

Eksempler: 
diceRoller(4) skal returnere noe som: [4, 1, 2, 6]
diceRoller(6) skal returnere noe som: [5, 5, 6, 2, 3, 4]

Legg til en andre parameter i funksjonen som bestemmer hvor mange sider terningen skal ha.
diceRoller(5, 20) skal returnere et array med 5 tilfeldige tall fra 1-20.

******************************************************************************/

// array
const diceArr = [];

/////////////
//Functions
////////////

function diceRoller (inNumber, inSide) {
	
	// Looping through the first number parameter
	for (let i = 0; i < inNumber; i++) {
		//dice arr that is looped with the first num parameter, that use methods to connect the other number parameter. +1 just to make it start on 1 and not 0
		diceArr[i] = Math.floor(Math.random() * inSide) + 1;
	}

	return diceArr;
}

//console.log(diceRoller(5, 20));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn ett array av strings som parameter.

Inne i funksjonen, gjør følgende:

Skriv en løkke som itererer gjennom stringene i arrayet, og gjør følgende:
- Fjern mellomrom fra starten og slutten av hvert ord.
- Gjør alle ordene om til små bokstaver.

Bruk en "for...of"-løkke.

Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string 
med et enkelt mellomrom mellom ordene (" "), og returner den resulterende stringen.

Eksempel:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
skal returnere:
"this text needs to be cleaned up"

******************************************************************************/

const stringArr = [
	"hEr ",
	" er", 
	"dEt ", 
	" baRE", 
	"roT "
];

/////////////
//Functions
////////////

function stringCleaned (inArray) {

	let completedText = "";

	// for of loop, looping through array
	for (let text of inArray) {
		
		// completedText +  text index(parameter) with methods
		completedText += `${text.trim().toLowerCase()} `;

	}

	// return cleaned text (completedText)
	return completedText;
}

//console.log(stringCleaned(stringArr));



/******************************************************************************
4.

Fullfør funksjonen nedenfor for å oppnå følgende:

Returner stringen som mottas i første parameter med følgende endringer:

Hver bokstav i stringen som matcher `charA` (andre parameteret) skal erstattes 
med `charB` (tredje parameteret), og VICE VERSA - det vil si at bokstaver som 
matcher `charA` skal byttes med `charB`, og bokstaver som matcher `charB` skal 
byttes med `charA`.

Eksempler:

doubleSwap("this is a string", "i", "s")
skal returnere "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
skal returnere "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
skal returnere "whao is ohe ptino tf ohis?"

******************************************************************************/

/////////////
//Functions
////////////

function doubleSwap(string, charA, charB) {

	let swappedText = "";

	//Looping through the string
	for (let i = 0; i < string.length; i++) {
		
		//if string letter is the same as charA
		if (string[i] === charA) {
			// swap letter with charB
			swappedText += charB;
		}

		// else if string is the same as charB
		else if (string[i] === charB) {
			// swap letter with CharA
			swappedText += charA;
		}
		// else swappedText should be the same as the string originally was
		else {
			swappedText += string[i];
		}
	}

	//return swappedText
	return swappedText;
}

/******************************************************************************
5.

EKSTRA UTFORDRING:

(Løsning av denne oppgaven er ikke obligatorisk, kun for de som vil ha en ekstra utfordring)

Lag en funksjon kalt `helloChecker` som tar inn en string som parameter.

Skriv kode som sjekker alle ordene i stringen for å finne ut om noen av dem
matcher ordet for "hei" på noen av disse språkene:

- hello (engelsk)
- ciao (italiensk)
- salut (fransk)
- hallo (tysk)
- hola (spansk)
- czesc (polsk)

Hvis noen av ordene i stringen matcher et av disse, skal funksjonen returnere:
"HELLO oppdaget på (navn på språket)."

Hvis ingen av ordene i strengen matcher, skal funksjonen returnere:
"Ingen HELLO oppdaget."

PS: Sørg for at funksjonen er case-insensitive; både "Hello" og "hello" skal oppdages.

Jeg har lagt til noen testvariabler for å sjekke funksjonen din.

******************************************************************************/

const greetings = [
  "Hello, how are you today?",
  "Diciamo ciao prima di andare!",
  "Salut, ça va bien?",
  "Kannst du mich hören? Hallo!",
  "Hva er regex?",
  "Nos saludamos con un alegre hola.",
  "Ona pomachała i powiedziała cześć z uśmiechem.",
  "Good afternoon gentlemen!"
];

// looping through the greeting arr
for (let i = 0; i < greetings.length; i++) {
	helloChecker(greetings[i]); 
}

/////////////
//Functions
////////////

//function for regx to validate the word hello for all lang and
//answer back if the word is validatet in a specific lang
function helloChecker (inText) {

	const posibilities = [
	{
		
		regx   : /Hello/i,
		
		answer : "HELLO, oppdaget på Engelsk",
	},
	{
		regx   : /ciao/i,
		answer : "CIAO, oppdaget på Italiensk",
	},
	{
		regx  : /salut/i,
		answer: "SALUT, oppdaget på Fransk",
	},
	{
		regx  : /hallo/i,
		answer: "HALLO, oppdaget på Tysk",
	},
	{
		regx  : /hola/i,
		answer: "HOLA, oppdaget på Spansk",
	},
	{
		regx  : /cześć/i,
		answer: "CZESC, oppdaget på Polsk"
	}
	];

	// for of loop
	for (const posibility of posibilities) {

		// if inText match the word inside regX
		if(inText.match(posibility.regx)) {
			
			// do this
			// console.logs for intext and posibility.answer
			console.log(inText);
			console.log(posibility.answer);
		}
	}
}


