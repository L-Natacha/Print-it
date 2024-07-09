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

// variable fleches slider

const arrowLeft = document.querySelector ( ".arrow_left");
const arrowRight = document.querySelector (".arrow_right");

// variable Bullet points

const dots = document.querySelector (".dots");
const pointsPleins= document.querySelector (".arrowRight");

let index = 0

//variable des images et texte de la banniere
const banner= document.getElementById ("banner")
const bannerImage=banner.querySelector (".banner-img");
const bannerText= banner.querySelector("p")

// fonction clique fleches slider 
//gauche

function clickArrowLeft () {
	arrowLeft.addEventListener ("click",() => {
		//fonction changement d'image au click gauche
		index --;
			if (index < 0) {
				index = slides - 1 ;
			}
		// modification image et texte
		bannerImage.src = slides[index].image;
		bannerText.innerHTML = slides[index].tagLine;
		
	})
}
clickArrowLeft ();

//droite

function clickArrowRight() {
	arrowRight.addEventListener ( "click",() => {

		// retrait de la class css des bullet pleins
		const arrayDots = document.querySelectorAll (".dots .dot");
		arrayDots[index].classList.remove ("dot_selected");
		
		//fonction changement d'image au click droit
		index ++;
			if (index > slides.length - 1 ){
				index = 0
			}
		
		
		//ajout des differentes images et texte au slider
		bannerImage.src = slides[index].image;
		bannerText.innerHTML = slides[index].tagLine;
		// ajoutu de la class css des bullet pleins lorsque l'image à changé
		arrayDots[index].classList.add ("dot_selected");
		
	})
}
clickArrowRight ();


//fonction bullet points

function displayDots() {
	for (let i =0 ; i< slides.length; i++){
		const dot=document.createElement ("div");
		dot.classList.add ("dot");
		dots.appendChild (dot);
		if (i == index) {
		dot.classList.add("dot_selected");
		}
		dot.addEventListener ("click", () =>{
			index = i;
			clickArrowRight();	
			
		})
	}
}
displayDots();

