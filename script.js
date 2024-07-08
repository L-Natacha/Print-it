const slides = [
	{
		"image":"./images/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./images/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./images/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./images/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log (slides)

// variable fleches slider

const arrowLeft = document.querySelector ( ".arrow_left")
const arrowRight = document.querySelector (".arrow_right")

// fonction clique fleches slider 

function clickArrowLeft () {
	arrowLeft.addEventListener ("click",() => {
	console.log ("gauche");
	});
}
clickArrowLeft ();

function clickArrowRight() {
	arrowRight.addEventListener ("click",()=> {
		console.log ("droite");

	
});
}
clickArrowRight ();