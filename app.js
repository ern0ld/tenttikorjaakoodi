//Buttonin tallennus muuttujaan
//Buttonin tapahtumankäsittely, kutsutaan funktiota siirryKakkossivulle kun buttonia klikataan

var kakkosSivuBtn = document.getElementById("kakkossivubtn");
kakkosSivuBtn.onclick = siirrykakkossivulle;

var vaihdaOtsikotBtn = document.getElementById("vaihdaotsikkobtn");
vaihdaOtsikotBtn.onclick = teeJotain;

var takasKotiinBtn = document.getElementById("takaisinkotiinbtn")
takasKotiinBtn = takasKotiin;







//////////Tätä osaa ei tarvitse muuttaa eikä ymmärtää//////////////////////

function teeJotain(){
    document.querySelectorAll('h2').forEach(e => e.innerHTML=== "Vaihdettu" ? e.innerHTML = "Tässä kotisivun otsikko, taustavärin pitäisi olla punainen" : e.innerHTML = "Vaihdettu" );
}

function siirryKakkossivulle(){
    document.querySelector(".active").classList.remove("active");
   document.querySelector("#kakkosdiv").classList.add("active")
}

function takasKotiin(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#homediv").classList.add("active")
}
console.log(window.document.querySelector(".active").id === "homediv")
window.addEventListener("load" , function() {document.querySelector(".active").id === "homediv" ? document.getElementById("warning").hidden = false : document.getElementById("warning").hidden = true} )

window.addEventListener("click" , function() {document.querySelector(".active").id === "homediv" ? document.getElementById("warning").hidden = false : document.getElementById("warning").hidden = true} )
