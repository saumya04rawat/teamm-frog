
function first(){
    document.getElementById("slideimage").src="images/modi2.jpg";
}
function second(){
    document.getElementById("slideimage").src="images/modi3.jpg";
}
function third(){
    document.getElementById("slideimage").src="images/modi4.jpg";
}
function fourth(){
    document.getElementById("slideimage").src="images/modi.jpg";
}
// function fifth(){
//     document.getElementById("slideimage").src="modi3.jpg"
// }
setInterval( 1000);
setInterval(second,2000);
setInterval(third,3000);
setInterval(fourth,4000);
// setInterval(fifth,10000);