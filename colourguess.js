var numsquares = 6;
var colours = generaterandomcolor(numsquares);

var squares = document.querySelectorAll(".square");
var pickedcolor = randomcolor(); // will decide the winning color
var colordisplay = document.querySelector("#pickedcolor");
colordisplay.textContent = pickedcolor;
var headertext = document.querySelector("#headertext");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click",function () {
	easy.classList.add("selected");
	hard.classList.remove("selected");
	reset.classList.remove("selected");
	numsquares = 3;
	colours = generaterandomcolor(numsquares);
	pickedcolor = randomcolor();
	colordisplay.textContent = pickedcolor;

	for(var i =0; i< squares.length; i++)
	{
		if(colours[i]){
			squares[i].style.backgroundColor = colours[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	} 

	
});

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	reset.classList.remove("selected");
	numsquares = 6;
	colours = generaterandomcolor(numsquares);
	pickedcolor = randomcolor();
	colordisplay.textContent = pickedcolor;
	

	for(var i =0; i< squares.length; i++)
	{
		
			squares[i].style.backgroundColor = colours[i];
			squares[i].style.display = "block";
		}

});
reset.addEventListener("click", function(){
    colours = generaterandomcolor(numsquares);
    pickedcolor = randomcolor();
    colordisplay.textContent = pickedcolor;
    reset.textContent = "New colors";
    easy.classList.remove("selected");
	hard.classList.remove("selected");
	reset.classList.add("selected");
	headertext.textContent = "";
	
    for(var i=0 ; i<squares.length;i++)
    {
    	squares[i].style.backgroundColor = colours[i];

    }
    h1.style.backgroundColor ="steelblue ";

   
});



for(var i = 0; i < squares.length; i++)
{
	// for initial color of square
	squares[i].style.backgroundColor = colours[i];

	// event for square clicked

	squares[i].addEventListener("click" , function(){

		// to compare the clicked color to  variable pickedcolor
		var clickedcolor = this.style.backgroundColor;
		if( clickedcolor === pickedcolor)
		{
			headertext.textContent = "correct";
			changecolor(pickedcolor);
			h1.style.backgroundColor = pickedcolor;
			reset.textContent = "play again" ;
		   
		}
		else
		{
			this.style.backgroundColor = "#232323";
			headertext.textContent = "Try Again!";

		}

	});
} 
// to change the background of all squares is selected color is right.
function changecolor(color)
{
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}

}
//to decide a random winning color.
function randomcolor()
{
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}
// to generte random colors
function generaterandomcolor(num)
{
	var arr=[]
	for(var i =0; i < num; i++)
	{
		arr.push(randomcolors());

	}
	return arr;

}
//to generat random color
function randomcolors()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+r+","+" "+g+","+" "+b+")";
}

